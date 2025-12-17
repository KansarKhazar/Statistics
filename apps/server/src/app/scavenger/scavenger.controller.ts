import { Body, Controller, Post } from '@nestjs/common';

import { ScavengerService } from './scavenger.service';
import { CalcPeopleDto } from './dto';
import { BASE_SAVINGS_PATH, CALC_PEOPLE_PATH } from './scavenger.constats';

/**
 * ScavengerController
 *
 * @class
 *  Handles HTTP routes under "/scavenger" for calculating people counts.
 */
@Controller(BASE_SAVINGS_PATH)
export class ScavengerController {
  /**
   * Creates an instance of ScavengerController.
   *
   * @param {ScavengerService} scavengerService - Service containing scavenger-related business logic.
   */
  constructor(private readonly scavengerService: ScavengerService) {}

  /**
   * Processes a POST request to "/scavenger/CalcPeople" to calculate the number of people
   * between two dates.
   *
   * @param {CalcPeopleDto} dto - Data Transfer Object with `fromDate` and `toDate` fields.
   * @returns The result from scavengerService.getData(), typically a count or report.
   */
  @Post(CALC_PEOPLE_PATH)
  getData(@Body() dto: CalcPeopleDto) {
    return this.scavengerService.getData(dto.fromDate, dto.toDate);
  }
}
