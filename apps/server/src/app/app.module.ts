import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Internal Imports
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScavengerModule } from './Scavenger/scavenger.module';
import { SharedModule } from './SharedModule/shared.module';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { ExpressAdapter } from '@bull-board/express';
import { Users } from '../models/Users';
import { WorkingReports } from '../models/WorkingReports';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'root',
      database: 'warehouse',
      entities: [Users, WorkingReports],
      synchronize: false,
      options: {
        trustServerCertificate: true,
      },
    }),
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullBoardModule.forRoot({
      route: '/queueDashboard',
      adapter: ExpressAdapter,
    }),
    ScavengerModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
