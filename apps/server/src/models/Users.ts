import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { WorkingReports } from './WorkingReports';
import { IUsersModel } from '@kansar/common';
import { DailyReport } from './DailyReport';

@Index('employeeId_users', ['employeeId'], { unique: true })
@Index('PK_users', ['id'], { unique: true })
@Entity('users', { schema: 'dbo' })
export class Users implements IUsersModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'employeeSrl' })
  employeeSrl: number;

  @Column('int', { name: 'employeeId', unique: true })
  employeeId: number;

  @Column('nvarchar', { name: 'RFID', nullable: true, length: 50 })
  rfid: string | null;

  @Column('nvarchar', { name: 'personName', length: 128 })
  personName: string;

  @Column('nvarchar', { name: 'personFamily', length: 128 })
  personFamily: string;

  @Column('nvarchar', { name: 'personFullName', length: 256 })
  personFullName: string;

  @Column('nvarchar', { name: 'organizationName', nullable: true, length: 50 })
  organizationName: string | null;

  @Column('nvarchar', {
    name: 'organizationUnitName',
    nullable: true,
    length: 50,
  })
  organizationUnitName: string | null;

  @Column('nvarchar', {
    name: 'organizationalPostCaption',
    nullable: true,
    length: 50,
  })
  organizationalPostCaption: string | null;

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

  @OneToMany(() => DailyReport, (dailyReport) => dailyReport.user)
  dailyReports: DailyReport[];

  @OneToMany(() => WorkingReports, (workingReports) => workingReports.user)
  workingReports: WorkingReports[];
}
