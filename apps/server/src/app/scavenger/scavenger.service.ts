import { Injectable } from '@nestjs/common';
import { Jalali } from 'jalali-ts';
import { Repository } from 'typeorm';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { InjectRepository } from '@nestjs/typeorm';

// Internal Imports
import { MadaktoService } from '../SharedModule/Madakto/Madakto.service';
import { Users } from '../../models/Users';
import { QUEUE } from '../../enums';

@Injectable()
export class ScavengerService {
  constructor(
    private readonly madaktoService: MadaktoService,
    @InjectRepository(Users)
    private usersRep: Repository<Users>,
    @InjectQueue(QUEUE.REPORT) private queue: Queue
  ) {}

  async getData() {
    await this.madaktoService.login();

    const users = await this.madaktoService.getAllUsers();

    const entities: Users[] = [];
    for (const user of users) {
      // This will check if user is not active in MADAKTO
      // When User has been deactivated by Admins it means the user left the company
      if (user.PersonActive !== 1) continue;

      entities.push(
        this.usersRep.create({
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

    const safeChunkSize = 100;

    for (let i = 0; i < entities.length; i += safeChunkSize) {
      const part = entities.slice(i, i + safeChunkSize);

      await this.usersRep
        .createQueryBuilder()
        .insert()
        .values(part)
        .orIgnore()
        .execute();
    }

    const startOfMonth = Jalali.now().startOf('month').format('YYYY/MM/DD');
    const now = Jalali.now().format('YYYY/MM/DD');

    for (const user of users) {
      // This will check if user is not active in MADAKTO
      // When User has been deactivated by Admins it means the user left the company
      if (user.PersonActive !== 1) continue;

      this.queue.add(
        `${now}_user_${user.EmployeeId}`,
        {
          user,
          startOfMonth,
          now,
        },
        {
          attempts: 3,
        }
      );
    }

    return true;
  }
}
