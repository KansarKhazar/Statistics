/**
 * @file scavenger.module.ts
 * @description Defines the ScavengerModule which configures the scavenger feature,
 *              including services, controllers, queue consumers, TypeORM entities,
 *              and BullMQ queue integration with Bull Board UI.
 */

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

/**
 * @class ScavengerModule
 * @description NestJS module that encapsulates the scavenger functionality.
 *              It wires up the service, controller, database entities,
 *              background queue consumers, and monitoring UI.
 * @export
 */
@Module({
  providers: [ScavengerService, ReportConsumer, DailyReportConsumer],
  controllers: [ScavengerController],
  imports: [
    // Register TypeORM entities used by the scavenger feature
    TypeOrmModule.forFeature([Users, WorkingReports, DailyReport]),

    // Register BullMQ queues for processing reports
    BullModule.registerQueue(
      { name: QUEUE.REPORT },
      { name: QUEUE.DAILY_REPORT }
    ),

    // Expose Bull Board UI modules for monitoring queues
    BullBoardModule.forFeature(
      { name: QUEUE.REPORT, adapter: BullMQAdapter },
      { name: QUEUE.DAILY_REPORT, adapter: BullMQAdapter }
    ),
  ],
})
export class ScavengerModule {}
