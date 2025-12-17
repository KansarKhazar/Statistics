import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { QUEUE } from '@kansar/common';
import { Users, WorkingReports } from '../../../models';
import { MadaktoService } from '../../SharedModule/Madakto/Madakto.service';
import { TReportJobData } from './report-job-data.type';
import { MdbReportToSchemaHelper } from '../../../helpers';

/**
 * Processor for handling working report jobs from the REPORT queue.
 * Extends WorkerHost to leverage BullMQ worker features.
 *
 * @class ReportConsumer
 * @extends WorkerHost
 */
@Processor(QUEUE.REPORT, { concurrency: 1 })
export class ReportConsumer extends WorkerHost {
  /**
   * Creates a new instance of ReportConsumer.
   *
   * @param madaktoService - Service to fetch report data from external Madakto API.
   * @param workingReportsRep - Repository for WorkingReports entity.
   * @param usersRep - Repository for Users entity.
   */
  constructor(
    private readonly madaktoService: MadaktoService,
    @InjectRepository(WorkingReports)
    private workingReportsRep: Repository<WorkingReports>,
    @InjectRepository(Users) private usersRep: Repository<Users>
  ) {
    super();
  }

  /**
   * Processes a report job: fetches user data, retrieves report from MadaktoService,
   * transforms and upserts it into the database.
   *
   * @param job - A BullMQ job containing TReportJobData (user, startOfMonth, now).
   * @returns Promise resolving to an object indicating the result and report details.
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

    const report = await this.madaktoService.getReportForUser(
      String(user.EmployeeId),
      String(user.EmployeeId),
      startOfMonth,
      now
    );

    const workingReportEntity = this.workingReportsRep.create({
      ...MdbReportToSchemaHelper(report[0]),
      userId: dbUser.id,
      fromDate: startOfMonth,
      toDate: now,
      PersonFullName: user.PersonFullName,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.workingReportsRep.upsert(workingReportEntity, [
      'userId',
      'fromDate',
    ]);

    return {
      result: 'done',
      report: {
        EmployeeId: user.EmployeeId,
        userId: dbUser.id,
        fromDate: startOfMonth,
        toDate: now,
        PersonFullName: user.PersonFullName,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    };
  }
}
