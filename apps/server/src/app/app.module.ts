import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { ExpressAdapter } from '@bull-board/express';

// Internal Imports
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScavengerModule } from './Scavenger/scavenger.module';
import { SharedModule } from './SharedModule/shared.module';
import { DailyReport, Users, WorkingReports } from '../models';
import { env } from '../environment';

/**
 * Root application module.
 *
 * This module bootstraps and configures:
 * - TypeORM database connection based on environment variables.
 * - BullMQ for job queueing.
 * - Bull Board dashboard for queue monitoring.
 * - Feature modules: ScavengerModule and SharedModule.
 *
 * @export
 * @class AppModule
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: env.DB_TYPE,
      host: env.DB_HOST,
      port: env.DB_PORT,
      username: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_DATABASE,
      entities: [Users, WorkingReports, DailyReport],
      synchronize: false,
      options: {
        trustServerCertificate: true,
      },
    }),
    BullModule.forRoot({
      connection: {
        host: env.REDIS_HOST,
        port: env.REDIS_PORT,
      },
    }),
    BullBoardModule.forRoot({
      route: env.QUEUE_DASHBOARD_ROUTE,
      adapter: ExpressAdapter,
    }),
    ScavengerModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
