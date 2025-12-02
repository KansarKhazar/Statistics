import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';

import { ScavengerService } from './scavenger.service';
import { ScavengerController } from './scavenger.controller';
import { ReportConsumer } from './queue/report.consumer';
import { Users } from '../../models/Users';
import { WorkingReports } from '../../models/WorkingReports';
import { QUEUE } from '../../enums';

@Module({
  providers: [ScavengerService, ReportConsumer],
  controllers: [ScavengerController],
  imports: [
    TypeOrmModule.forFeature([Users, WorkingReports]),
    BullModule.registerQueue({
      name: QUEUE.REPORT,
    }),
    BullBoardModule.forFeature({
      name: QUEUE.REPORT,
      adapter: BullMQAdapter,
    }),
  ],
})
export class ScavengerModule {}
