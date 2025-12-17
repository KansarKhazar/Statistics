import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { QUEUE } from '@kansar/common';

import { Users, DailyReport } from '../../../models';
import { MadaktoService } from '../../SharedModule/Madakto/Madakto.service';
import { TReportJobData } from './report-job-data.type';
import { MdbDailyReportToSchemaHelper } from '../../../helpers';

@Processor(QUEUE.DAILY_REPORT, { concurrency: 1 })
export class DailyReportConsumer extends WorkerHost {
  constructor(
    private readonly madaktoService: MadaktoService,
    @InjectRepository(DailyReport)
    private dailyReportsRep: Repository<DailyReport>,
    @InjectRepository(Users)
    private usersRep: Repository<Users>
  ) {
    super();
  }

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
    await this.dailyReportsRep.upsert(entities, ['userId', 'FCDate']);

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
