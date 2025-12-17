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

/**
 * Service responsible for synchronizing user data from Madakto,
 * inserting new users into the database, and enqueueing reporting jobs.
 *
 * @class ScavengerService
 */
@Injectable()
export class ScavengerService {
  /**
   * Creates an instance of ScavengerService.
   *
   * @param {MadaktoService} madaktoService - Service to interact with the Madakto API.
   * @param {Repository<Users>} usersRep - TypeORM repository for the Users entity.
   * @param {Queue} reportQueue - BullMQ queue for general report jobs.
   * @param {Queue} dailyQueue - BullMQ queue for daily report jobs.
   */
  constructor(
    private readonly madaktoService: MadaktoService,
    @InjectRepository(Users) private usersRep: Repository<Users>,
    @InjectQueue(QUEUE.REPORT) private reportQueue: Queue,
    @InjectQueue(QUEUE.DAILY_REPORT) private dailyQueue: Queue
  ) {}

  /**
   * Fetches user data from Madakto, stores any new users, and enqueues
   * both daily and full report jobs for active users.
   *
   * @param {string} [fromDate] - Optional start date (YYYY-MM-DD). Defaults to the first day of the current month.
   * @param {string} [toDate] - Optional end date (YYYY-MM-DD). Defaults to today.
   * @returns {Promise<boolean>} Resolves to true once all jobs have been enqueued.
   */
  async getData(fromDate = '', toDate = '') {
    await this.madaktoService.login();
    const users = await this.madaktoService.getAllUsers();

    await this.chunkInsertNewUsers(users);

    const startOfMonth =
      fromDate !== ''
        ? fromDate
        : Jalali.now().startOf('month').format('YYYY-MM-DD');
    const now = toDate !== '' ? toDate : Jalali.now().format('YYYY-MM-DD');

    for (const user of users) {
      // Only enqueue jobs for active users (PersonActive === 1)
      if (user.PersonActive !== 1) continue;

      this.dailyQueue.add(
        `${now}_daily_user_${user.EmployeeId}`,
        { user, startOfMonth, now },
        { attempts: 1, removeOnComplete: true }
      );

      this.reportQueue.add(
        `${now}_user_${user.EmployeeId}`,
        { user, startOfMonth, now },
        { attempts: 1, removeOnComplete: true }
      );
    }

    return true;
  }

  /**
   * Inserts or updates user records in the database in chunks to prevent
   * large single queries. Skips users who are not active.
   *
   * @private
   * @param {IUser[]} users - List of user objects retrieved from Madakto.
   * @returns {Promise<void>}
   */
  private async chunkInsertNewUsers(users: IUser[]) {
    const entities: Users[] = [];

    for (const user of users) {
      // Skip inactive users
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
