import { Injectable } from '@nestjs/common';
import { Jalali } from 'jalali-ts';
import { Repository } from 'typeorm';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser, QUEUE } from '@kansar/common';

// Internal Imports
import { MadaktoService } from '../SharedModule/Madakto/Madakto.service';
import { Users } from '../../models';
import { chunkInsertOrUpdate } from '../../helpers';

@Injectable()
export class ScavengerService {
  constructor(
    private readonly madaktoService: MadaktoService,
    @InjectRepository(Users)
    private usersRep: Repository<Users>,
    @InjectQueue(QUEUE.REPORT) private reportQueue: Queue,
    @InjectQueue(QUEUE.DAILY_REPORT) private dailyQueue: Queue
  ) {}

  async getData(fromDate = '', toDate = '') {
    await this.madaktoService.login();

    const users = await this.madaktoService.getAllUsers();

    await this.chunkInsertNewUsers(users);

    const startOfMonth =
      fromDate != ''
        ? fromDate
        : Jalali.now().startOf('month').format('YYYY-MM-DD');

    const now = toDate != '' ? toDate : Jalali.now().format('YYYY-MM-DD');

    for (const user of users) {
      // This will check if user is not active in MADAKTO
      // When User has been deactivated by Admins it means the user left the company
      if (user.PersonActive !== 1) continue;

      this.dailyQueue.add(
        `${now}_daily_user_${user.EmployeeId}`,
        {
          user,
          startOfMonth,
          now,
        },
        {
          attempts: 1,
          removeOnComplete: true,
        }
      );

      this.reportQueue.add(
        `${now}_user_${user.EmployeeId}`,
        {
          user,
          startOfMonth,
          now,
        },
        {
          attempts: 1,
          removeOnComplete: true,
        }
      );
    }

    return true;
  }

  private async chunkInsertNewUsers(users: IUser[]) {
    const entities: Users[] = [];
    for (const user of users) {
      // This will check if user is not active in MADAKTO
      // When User has been deactivated by Admins it means the user left the company
      if (user.PersonActive !== 1) continue;

      entities.push(
        this.usersRep.create({
          employeeSrl: user.EmployeeSrl,
          employeeId: user.EmployeeId,
          rfid: user.RFID,
          personName: user.PersonName,
          personFamily: user.PersonFamily,
          personFullName: user.PersonFullName,
          organizationName: user.OrganizationName,
          organizationUnitName: user.OrganizationUnitName,
          organizationalPostCaption: user.OrganizationalPostCaption,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      );
    }

    await chunkInsertOrUpdate(this.usersRep, entities, 100, ['employeeId']);
  }
}
