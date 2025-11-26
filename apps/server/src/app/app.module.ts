import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScavengerModule } from './scavenger/scavenger.module';

@Module({
  imports: [ScavengerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
