import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IWorkingReportsModel } from '@kansar/common';

import { Users } from './Users';

@Index('IX_workingReports_userId_fromDate', ['userId', 'fromDate'], {
  unique: true,
})
@Index('PK_workingReports', ['id'], { unique: true })
@Entity('workingReports', { schema: 'dbo' })
export class WorkingReports implements IWorkingReportsModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'userId' })
  userId: number;

  @Column('nvarchar', { name: 'fromDate' })
  fromDate: string;

  @Column('nvarchar', { name: 'toDate' })
  toDate: string;

  @Column('int', { name: 'AttendanceCardNo' })
  AttendanceCardNo: number;

  @Column('nvarchar', { name: 'PersonFullName', length: 256 })
  PersonFullName: string;

  @Column('int', { name: 'FCDailyMeritVacation', default: () => 0 })
  FCDailyMeritVacation: number;

  @Column('int', { name: 'FCHourlyMeritVacation' })
  FCHourlyMeritVacation: number;

  @Column('int', { name: 'FCDailyMedicalVacation', default: () => 0 })
  FCDailyMedicalVacation: number;

  @Column('int', { name: 'FCHourlyMedicalVacation' })
  FCHourlyMedicalVacation: number;

  @Column('int', { name: 'FCDailyAccidentVacation', default: () => 0 })
  FCDailyAccidentVacation: number;

  @Column('int', { name: 'FCHourlyAccidentVacation' })
  FCHourlyAccidentVacation: number;

  @Column('int', { name: 'FCDailyOrganizationalVacation' })
  FCDailyOrganizationalVacation: number;

  @Column('int', { name: 'FCHourlyOrganizationalVacation' })
  FCHourlyOrganizationalVacation: number;

  @Column('int', { name: 'FCDailyWithoutSalaryVacation' })
  FCDailyWithoutSalaryVacation: number;

  @Column('int', { name: 'FCHourlyWithoutSalaryVacation' })
  FCHourlyWithoutSalaryVacation: number;

  @Column('int', { name: 'FCDailyWithSalaryMission', default: () => 0 })
  FCDailyWithSalaryMission: number;

  @Column('int', { name: 'FCHourlyWithSalaryMission' })
  FCHourlyWithSalaryMission: number;

  @Column('int', { name: 'FCDailyWithoutSalaryMission', default: () => 0 })
  FCDailyWithoutSalaryMission: number;

  @Column('int', { name: 'FCHourlyWithoutSalaryMission' })
  FCHourlyWithoutSalaryMission: number;

  @Column('int', { name: 'FCDailyMission', default: () => 0 })
  FCDailyMission: number;

  @Column('int', { name: 'FCHourlyMission' })
  FCHourlyMission: number;

  @Column('int', { name: 'FCDailyValidAbsence', default: () => 0 })
  FCDailyValidAbsence: number;

  @Column('int', { name: 'FCHourlyValidAbsence' })
  FCHourlyValidAbsence: number;

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

  @Column('int', { name: 'FCInValidOvertimeBeforeTime' })
  FCInValidOvertimeBeforeTime: number;

  @Column('int', { name: 'FCInValidOvertimeAfterTime' })
  FCInValidOvertimeAfterTime: number;

  @Column('int', { name: 'FCOverTimeBeforeTime' })
  FCOverTimeBeforeTime: number;

  @Column('int', { name: 'FCOverTimeAfterTime' })
  FCOverTimeAfterTime: number;

  @Column('int', { name: 'FCValidOvertime' })
  FCValidOvertime: number;

  @Column('int', { name: 'FCInValidOvertime' })
  FCInValidOvertime: number;

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

  @Column('int', { name: 'FCInValidExist' })
  FCInValidExist: number;

  @Column('int', { name: 'FCDeficincyValue' })
  FCDeficincyValue: number;

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

  @Column('int', { name: 'FCDailyFunction', default: () => 0 })
  FCDailyFunction: number;

  @Column('int', { name: 'FCNightlyFunction' })
  FCNightlyFunction: number;

  @Column('int', { name: 'FCDailyInValidAbsence', default: () => 0 })
  FCDailyInValidAbsence: number;

  @Column('int', { name: 'VacationRemainderDaily', default: () => 0 })
  VacationRemainderDaily: number;

  @Column('int', { name: 'VacationRemainderHourly' })
  VacationRemainderHourly: number;

  @CreateDateColumn({
    type: 'datetime2',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime2',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ManyToOne(() => Users, (users) => users.workingReports)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  user: Users;
}
