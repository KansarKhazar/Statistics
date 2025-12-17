import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { QUEUE } from '@kansar/common';

import { ScavengerService } from './scavenger.service';
import { ScavengerController } from './scavenger.controller';
import { ReportConsumer, DailyReportConsumer } from './queue';
import { DailyReport, Users, WorkingReports } from '../../models';

@Module({
  providers: [ScavengerService, ReportConsumer, DailyReportConsumer],
  controllers: [ScavengerController],
  imports: [
    TypeOrmModule.forFeature([Users, WorkingReports, DailyReport]),
    BullModule.registerQueue(
      { name: QUEUE.REPORT },
      { name: QUEUE.DAILY_REPORT }
    ),
    BullBoardModule.forFeature(
      { name: QUEUE.REPORT, adapter: BullMQAdapter },
      { name: QUEUE.DAILY_REPORT, adapter: BullMQAdapter }
    ),
  ],
})
export class ScavengerModule {}
