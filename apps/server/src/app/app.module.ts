import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScavengerModule } from './Scavenger/scavenger.module';
import { SharedModule } from './SharedModule/shared.module';

@Module({
  imports: [ScavengerModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
