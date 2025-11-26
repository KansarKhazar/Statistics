import { Controller, Get } from '@nestjs/common';
import { ScavengerService } from './scavenger.service';

@Controller('scavenger')
export class ScavengerController {
  constructor(private readonly scavengerService: ScavengerService) {}

    @Get("CalcPeople")
    getData() {
      return this.scavengerService.getData();
    }
}
