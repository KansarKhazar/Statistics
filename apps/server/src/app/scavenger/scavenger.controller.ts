import { Body, Controller, Post } from '@nestjs/common';

import { ScavengerService } from './scavenger.service';
import { CalcPeopleDto } from './dto';

@Controller('scavenger')
export class ScavengerController {
  constructor(private readonly scavengerService: ScavengerService) {}

  @Post('CalcPeople')
  getData(@Body() dto: CalcPeopleDto) {
    return this.scavengerService.getData(dto.fromDate, dto.toDate);
  }
}
