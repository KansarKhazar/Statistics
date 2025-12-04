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

@Index('PK_workingReports', ['id'], { unique: true })
@Index('userId_workingReports', ['userId'], {})
@Entity('workingReports', { schema: 'dbo' })
export class WorkingReports implements IWorkingReportsModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column('int', { name: 'userId' })
  userId!: number;

  @Column('nvarchar', { name: 'fromDate' })
  fromDate!: string;

  @Column('nvarchar', { name: 'toDate' })
  toDate!: string;

  @Column('int', { name: 'AttendanceCardNo' })
  AttendanceCardNo!: number;

  @Column('nvarchar', { name: 'PersonFullName', length: 256 })
  PersonFullName!: string;

  @Column('int', { name: 'FCDailyMeritVacation', default: () => 0 })
  FCDailyMeritVacation!: number;

  @Column('time', { name: 'FCHourlyMeritVacation' })
  FCHourlyMeritVacation!: string;

  @Column('int', { name: 'FCDailyMedicalVacation', default: () => 0 })
  FCDailyMedicalVacation!: number;

  @Column('time', { name: 'FCHourlyMedicalVacation' })
  FCHourlyMedicalVacation!: string;

  @Column('int', { name: 'FCDailyAccidentVacation', default: () => 0 })
  FCDailyAccidentVacation!: number;

  @Column('time', { name: 'FCHourlyAccidentVacation' })
  FCHourlyAccidentVacation!: string;

  @Column('int', { name: 'FCDailyOrganizationalVacation' })
  FCDailyOrganizationalVacation!: number;

  @Column('time', { name: 'FCHourlyOrganizationalVacation' })
  FCHourlyOrganizationalVacation!: string;

  @Column('int', { name: 'FCDailyWithoutSalaryVacation' })
  FCDailyWithoutSalaryVacation!: number;

  @Column('time', { name: 'FCHourlyWithoutSalaryVacation' })
  FCHourlyWithoutSalaryVacation!: string;

  @Column('int', { name: 'FCDailyWithSalaryMission', default: () => 0 })
  FCDailyWithSalaryMission!: number;

  @Column('time', { name: 'FCHourlyWithSalaryMission' })
  FCHourlyWithSalaryMission!: string;

  @Column('int', { name: 'FCDailyWithoutSalaryMission', default: () => 0 })
  FCDailyWithoutSalaryMission!: number;

  @Column('time', { name: 'FCHourlyWithoutSalaryMission' })
  FCHourlyWithoutSalaryMission!: string;

  @Column('int', { name: 'FCDailyMission', default: () => 0 })
  FCDailyMission!: number;

  @Column('time', { name: 'FCHourlyMission' })
  FCHourlyMission!: string;

  @Column('int', { name: 'FCDailyValidAbsence', default: () => 0 })
  FCDailyValidAbsence!: number;

  @Column('time', { name: 'FCHourlyValidAbsence' })
  FCHourlyValidAbsence!: string;

  @Column('time', { name: 'FCValidDelayFirstTime' })
  FCValidDelayFirstTime!: string;

  @Column('time', { name: 'FCInValidDelayFirstTime' })
  FCInValidDelayFirstTime!: string;

  @Column('time', { name: 'FCDelayFirstTime' })
  FCDelayFirstTime!: string;

  @Column('time', { name: 'FCValidEarlyExitEndTime' })
  FCValidEarlyExitEndTime!: string;

  @Column('time', { name: 'FCInValidEarlyExitEndTime' })
  FCInValidEarlyExitEndTime!: string;

  @Column('time', { name: 'FCEarlyExitEndTime' })
  FCEarlyExitEndTime!: string;

  @Column('time', { name: 'FCConstantOverTime' })
  FCConstantOverTime!: string;

  @Column('time', { name: 'FCOverHeadOverTime' })
  FCOverHeadOverTime!: string;

  @Column('time', { name: 'FCValidOvertimeBeforeTime' })
  FCValidOvertimeBeforeTime!: string;

  @Column('time', { name: 'FCValidOvertimeAfterTime' })
  FCValidOvertimeAfterTime!: string;

  @Column('time', { name: 'FCInValidOvertimeBeforeTime' })
  FCInValidOvertimeBeforeTime!: string;

  @Column('time', { name: 'FCInValidOvertimeAfterTime' })
  FCInValidOvertimeAfterTime!: string;

  @Column('time', { name: 'FCOverTimeBeforeTime' })
  FCOverTimeBeforeTime!: string;

  @Column('time', { name: 'FCOverTimeAfterTime' })
  FCOverTimeAfterTime!: string;

  @Column('time', { name: 'FCValidOvertime' })
  FCValidOvertime!: string;

  @Column('time', { name: 'FCInValidOvertime' })
  FCInValidOvertime!: string;

  @Column('time', { name: 'FCValidOverTimeInHoliday' })
  FCValidOverTimeInHoliday!: string;

  @Column('time', { name: 'FCInValidOverTimeInHoliday' })
  FCInValidOverTimeInHoliday!: string;

  @Column('time', { name: 'FCOverTimeInHoliday' })
  FCOverTimeInHoliday!: string;

  @Column('time', { name: 'FCOverTime' })
  FCOverTime!: string;

  @Column('time', { name: 'FCExistInShift' })
  FCExistInShift!: string;

  @Column('time', { name: 'FCValidExist' })
  FCValidExist!: string;

  @Column('time', { name: 'FCInValidExist' })
  FCInValidExist!: string;

  @Column('time', { name: 'FCDeficincyValue' })
  FCDeficincyValue!: string;

  @Column('time', { name: 'FCDayDutyFunction' })
  FCDayDutyFunction!: string;

  @Column('time', { name: 'FCHourlyShiftFunctionTen' })
  FCHourlyShiftFunctionTen!: string;

  @Column('time', { name: 'FCHourlyShiftFunctionFifteen' })
  FCHourlyShiftFunctionFifteen!: string;

  @Column('time', { name: 'FCHourlyShiftFunctionTwentyTwoPointFive' })
  FCHourlyShiftFunctionTwentyTwoPointFive!: string;

  @Column('time', { name: 'FCHourlyShiftFunctionThirtyFive' })
  FCHourlyShiftFunctionThirtyFive!: string;

  @Column('time', { name: 'FCHourlyShiftFunction' })
  FCHourlyShiftFunction!: string;

  @Column('int', { name: 'FCDailyFunction', default: () => 0 })
  FCDailyFunction!: number;

  @Column('int', { name: 'FCNightlyFunction' })
  FCNightlyFunction!: number;

  @Column('int', { name: 'FCDailyInValidAbsence', default: () => 0 })
  FCDailyInValidAbsence!: number;

  @Column('int', { name: 'VacationRemainderDaily', default: () => 0 })
  VacationRemainderDaily!: number;

  @Column('time', { name: 'VacationRemainderHourly' })
  VacationRemainderHourly!: string;

  @CreateDateColumn({
    type: 'datetime2',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'datetime2',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt!: Date;

  @ManyToOne(() => Users, (users) => users.workingReports)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  user!: Users;
}
