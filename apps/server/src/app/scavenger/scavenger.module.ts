import { Module } from '@nestjs/common';
import { ScavengerService } from './scavenger.service';
import { ScavengerController } from './scavenger.controller';

@Module({
  providers: [ScavengerService],
  controllers: [ScavengerController]
})
export class ScavengerModule {}
