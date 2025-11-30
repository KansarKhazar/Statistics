import { Injectable } from '@nestjs/common';
import { Jalali } from 'jalali-ts';

// Internal Imports
import { MadaktoService } from '../SharedModule/Madakto/Madakto.service';

@Injectable()
export class ScavengerService {
  constructor(private readonly MadaktoService: MadaktoService) {}
  async getData() {
    await this.MadaktoService.login();

    const users = await this.MadaktoService.getAllUsers(5);

    const startOfMonth = Jalali.now().startOf('month').format('YYYY/MM/DD');
    const now = Jalali.now().format('YYYY/MM/DD');
    console.log(users);
    users.forEach(async (user) => {
      const report = await this.MadaktoService.getReportForUser(
        String(user.EmployeeId),
        String(user.EmployeeId),
        startOfMonth,
        now
      );
      // We Log the Report Data for now
      console.log(report);
      // TODO: SAVE REPORT Data in Database
    });

    return false;
  }
}
