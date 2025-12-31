import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users';
import { IDailyReportModel } from '@kansar/common';

/**
 * Represents a daily attendance report record.
 *
 * @class DailyReport
 * @implements {IDailyReport}
 *
 *   Maps to the 'dailyReport' table in the 'dbo' schema, holding clock-in/out times,
 *   vacation, mission and overtime summaries per day for a particular user.
 */
@Index('IX_dailyReport_userId_FCDate', ['userId', 'FCDate'], { unique: true })
@Index('PK_dailyReport', ['id'], { unique: true })
@Entity('dailyReport', { schema: 'dbo' })
export class DailyReport implements IDailyReportModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'userId' })
  userId: number;

  @Column('int', { name: 'EmployeeId' })
  EmployeeId: number;

  @Column('nvarchar', { name: 'FCDayName', length: 15 })
  FCDayName: string;

  @Column('nvarchar', { name: 'EmployeeFullName', length: 256 })
  EmployeeFullName: string;

  @Column('int', { name: 'FCDate' })
  FCDate: number;

  @Column('time', { name: 'FCEnterTime1' })
  FCEnterTime1: string;

  @Column('time', { name: 'FCExitTime1' })
  FCExitTime1: string;

  @Column('time', { name: 'FCEnterTime2' })
  FCEnterTime2: string;

  @Column('time', { name: 'FCExitTime2' })
  FCExitTime2: string;

  @Column('time', { name: 'FCEnterTime3' })
  FCEnterTime3: string;

  @Column('time', { name: 'FCExitTime3' })
  FCExitTime3: string;

  @Column('time', { name: 'FCEnterTime4' })
  FCEnterTime4: string;

  @Column('time', { name: 'FCExitTime4' })
  FCExitTime4: string;

  @Column('time', { name: 'FCEnterTime5' })
  FCEnterTime5: string;

  @Column('time', { name: 'FCExitTime5' })
  FCExitTime5: string;

  @Column('time', { name: 'FCEnterTime6' })
  FCEnterTime6: string;

  @Column('time', { name: 'FCExitTime6' })
  FCExitTime6: string;

  @Column('int', { name: 'FCHourlyMeritVacation' })
  FCHourlyMeritVacation: number;

  @Column('int', { name: 'FCDailyMeritVacation' })
  FCDailyMeritVacation: number;

  @Column('int', { name: 'FCHourlyMedicalVacation' })
  FCHourlyMedicalVacation: number;

  @Column('int', { name: 'FCDailyMedicalVacation' })
  FCDailyMedicalVacation: number;

  @Column('int', { name: 'FCHourlyAccidentVacation' })
  FCHourlyAccidentVacation: number;

  @Column('int', { name: 'FCDailyAccidentVacation' })
  FCDailyAccidentVacation: number;

  @Column('int', { name: 'FCHourlyOrganizationalVacation' })
  FCHourlyOrganizationalVacation: number;

  @Column('int', { name: 'FCDailyOrganizationalVacation' })
  FCDailyOrganizationalVacation: number;

  @Column('int', { name: 'FCHourlyWithoutSalaryVacation' })
  FCHourlyWithoutSalaryVacation: number;

  @Column('int', { name: 'FCDailyWithoutSalaryVacation' })
  FCDailyWithoutSalaryVacation: number;

  @Column('int', { name: 'FCDailyWithSalaryMission' })
  FCDailyWithSalaryMission: number;

  @Column('int', { name: 'FCHourlyWithSalaryMission' })
  FCHourlyWithSalaryMission: number;

  @Column('int', { name: 'FCDailyWithoutSalaryMission' })
  FCDailyWithoutSalaryMission: number;

  @Column('int', { name: 'FCHourlyWithoutSalaryMission' })
  FCHourlyWithoutSalaryMission: number;

  @Column('int', { name: 'FCDailyMission' })
  FCDailyMission: number;

  @Column('int', { name: 'FCHourlyMission' })
  FCHourlyMission: number;

  @Column('int', { name: 'FCHourlyValidAbsence' })
  FCHourlyValidAbsence: number;

  @Column('int', { name: 'FCDailyValidAbsence' })
  FCDailyValidAbsence: number;

  @Column('bit', { name: 'FCIsRamadan' })
  FCIsRamadan: number;

  @Column('int', { name: 'FCValidDelayFirstTime' })
  FCValidDelayFirstTime: number;

  @Column('int', { name: 'FCInValidDelayFirstTime' })
  FCInValidDelayFirstTime: number;

  @Column('int', { name: 'FCDelayFirstTime' })
  FCDelayFirstTime: number;

  @Column('int', { name: 'FCValidEarlyExitEndTime' })
  FCValidEarlyExitEndTime: number;

  @Column('int', { name: 'FCInValidEarlyExitEndTime' })
  FCInValidEarlyExitEndTime: number;

  @Column('int', { name: 'FCEarlyExitEndTime' })
  FCEarlyExitEndTime: number;

  @Column('int', { name: 'FCConstantOverTime' })
  FCConstantOverTime: number;

  @Column('int', { name: 'FCOverHeadOverTime' })
  FCOverHeadOverTime: number;

  @Column('int', { name: 'FCValidOvertimeBeforeTime' })
  FCValidOvertimeBeforeTime: number;

  @Column('int', { name: 'FCValidOvertimeAfterTime' })
  FCValidOvertimeAfterTime: number;

  @Column('int', { name: 'FCInValidOverTimeBeforeTime' })
  FCInValidOverTimeBeforeTime: number;

  @Column('int', { name: 'FCInValidOverTimeAfterTime' })
  FCInValidOverTimeAfterTime: number;

  @Column('int', { name: 'FCOverTimeBeforeTime' })
  FCOverTimeBeforeTime: number;

  @Column('int', { name: 'FCOverTimeAfterTime' })
  FCOverTimeAfterTime: number;

  @Column('int', { name: 'FCValidOverTime' })
  FCValidOverTime: number;

  @Column('int', { name: 'FCInvalidOverTime' })
  FCInvalidOverTime: number;

  @Column('int', { name: 'FCValidOverTimeInHoliday' })
  FCValidOverTimeInHoliday: number;

  @Column('int', { name: 'FCInValidOverTimeInHoliday' })
  FCInValidOverTimeInHoliday: number;

  @Column('int', { name: 'FCOverTimeInHoliday' })
  FCOverTimeInHoliday: number;

  @Column('int', { name: 'FCOverTime' })
  FCOverTime: number;

  @Column('int', { name: 'FCExistInShift' })
  FCExistInShift: number;

  @Column('int', { name: 'FCValidExist' })
  FCValidExist: number;

  @Column('int', { name: 'FCInvalidExist' })
  FCInvalidExist: number;

  @Column('int', { name: 'FCDeficincyValue' })
  FCDeficincyValue: number;

  @Column('nvarchar', { name: 'FCShiftTypeDetail', length: 50 })
  FCShiftTypeDetail: string;

  @Column('nvarchar', { name: 'JobGroupName', length: 50 })
  JobGroupName: string;

  @Column('int', { name: 'FCDayDutyFunction' })
  FCDayDutyFunction: number;

  @Column('int', { name: 'FCHourlyShiftFunctionTen' })
  FCHourlyShiftFunctionTen: number;

  @Column('int', { name: 'FCHourlyShiftFunctionFifteen' })
  FCHourlyShiftFunctionFifteen: number;

  @Column('int', { name: 'FCHourlyShiftFunctionTwentyTwoPointFive' })
  FCHourlyShiftFunctionTwentyTwoPointFive: number;

  @Column('int', { name: 'FCHourlyShiftFunctionThirtyFive' })
  FCHourlyShiftFunctionThirtyFive: number;

  @Column('int', { name: 'FCHourlyShiftFunction' })
  FCHourlyShiftFunction: number;

  @Column('nvarchar', { name: 'FCDayDescription', length: 128 })
  FCDayDescription: string;

  @Column('int', { name: 'FCDailyFunction' })
  FCDailyFunction: number;

  @Column('int', { name: 'FCNightlyFunction' })
  FCNightlyFunction: number;

  @Column('int', { name: 'FCDailyInValidAbsence' })
  FCDailyInValidAbsence: number;

  @Column('int', { name: 'VacationRemainderDaily' })
  VacationRemainderDaily: number;

  @Column('int', { name: 'VacationRemainderHourly' })
  VacationRemainderHourly: number;

  @Column('datetime', { name: 'createdAt' })
  createdAt: Date;

  @Column('datetime', { name: 'updatedAt' })
  updatedAt: Date;

  @ManyToOne(() => Users, (users) => users.dailyReports)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  user: Users;
}
