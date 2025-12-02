import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Users, WorkingReports } from '../../../models';
import { MadaktoService } from '../../SharedModule/Madakto/Madakto.service';
import { TReportJobData } from './report-job-data.type';
import { MdbReportToSchemaHelper } from '../../../helpers';
import { QUEUE } from '../../../enums';

@Processor(QUEUE.REPORT, { concurrency: 1 })
export class ReportConsumer extends WorkerHost {
  constructor(
    private readonly madaktoService: MadaktoService,
    @InjectRepository(WorkingReports)
    private workingReportsRep: Repository<WorkingReports>,
    @InjectRepository(Users)
    private usersRep: Repository<Users>
  ) {
    super();
  }

  async process(job: Job<TReportJobData>): Promise<any> {
    const { user, startOfMonth, now } = job.data;

    const report = await this.madaktoService.getReportForUser(
      String(user.EmployeeId),
      String(user.EmployeeId),
      startOfMonth,
      now
    );

    const exists = await this.workingReportsRep.existsBy({
      AttendanceCardNo: user.EmployeeId,
      fromDate: startOfMonth,
    });
    if (exists) {
      // If Record exists only update it
      await this.workingReportsRep.update(
        { AttendanceCardNo: user.EmployeeId, fromDate: startOfMonth },
        {
          ...MdbReportToSchemaHelper(report),
          toDate: now,
          PersonFullName: user.PersonFullName,
        }
      );
    } else {
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

      // Insert new Report record to Database
      const workingReport = this.workingReportsRep.create({
        ...MdbReportToSchemaHelper(report),
        userId: dbUser.id,
        fromDate: startOfMonth,
        toDate: now,
        PersonFullName: user.PersonFullName,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await this.workingReportsRep.insert(workingReport);
    }

    return {
      result: 'done',
      report: {
        ...MdbReportToSchemaHelper(report),
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
