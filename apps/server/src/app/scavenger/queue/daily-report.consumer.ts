import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { QUEUE } from '@kansar/common';
import { Users, DailyReport } from '../../../models';
import { MadaktoService } from '../../SharedModule/Madakto/Madakto.service';
import { TReportJobData } from './report-job-data.type';
import {
  chunkInsertOrUpdate,
  MdbDailyReportToSchemaHelper,
} from '../../../helpers';

/**
 * Consumer that handles processing of daily report jobs from the queue.
 * Uses MadaktoService to fetch report data and persists it via TypeORM repositories.
 *
 * @class
 */
@Processor(QUEUE.DAILY_REPORT, { concurrency: 1 })
export class DailyReportConsumer extends WorkerHost {
  /**
   * Creates an instance of DailyReportConsumer.
   *
   * @param madaktoService - Service for fetching report data from Madakto API
   * @param dailyReportsRep - TypeORM repository for DailyReport entities
   * @param usersRep - TypeORM repository for Users entities
   */
  constructor(
    private readonly madaktoService: MadaktoService,
    @InjectRepository(DailyReport)
    private dailyReportsRep: Repository<DailyReport>,
    @InjectRepository(Users)
    private usersRep: Repository<Users>
  ) {
    super();
  }

  /**
   * Processes an individual job from the DAILY_REPORT queue.
   * - Validates that the user exists in the database
   * - Fetches daily report data for the specified period via MadaktoService
   * - Maps the raw data to DailyReport entities and upserts them
   *
   * @param job - BullMQ Job containing TReportJobData (user, startOfMonth, now)
   * @returns Promise with a result object indicating success or failure
   */
  async process(job: Job<TReportJobData>): Promise<any> {
    const { user, startOfMonth, now } = job.data;
    const dbUser = await this.usersRep.findOneBy({
      employeeId: user.EmployeeId,
    });

    // If user not exists in our database, (which should be always exists) throw error
    if (!dbUser) {
      job.moveToFailed(
        new Error(
          `user with employeeId: ${user.EmployeeId} not found in warehouse database.`
        ),
        String(job.token)
      );
      return { result: 'faild' };
    }

    const dailyReport = await this.madaktoService.getDailyReportForUser(
      String(user.EmployeeId),
      String(user.EmployeeId),
      startOfMonth,
      now
    );

    const entities: DailyReport[] = [];
    for (const day of dailyReport) {
      entities.push(
        this.dailyReportsRep.create({
          ...MdbDailyReportToSchemaHelper(day),
          userId: dbUser.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      );
    }

    await chunkInsertOrUpdate(this.dailyReportsRep, entities, 15, [
      'userId',
      'FCDate',
    ]);

    return {
      result: 'done',
      report: {
        EmployeeId: user.EmployeeId,
        fromDate: startOfMonth,
        toDate: now,
        PersonFullName: user.PersonFullName,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    };
  }
}
