import { IsOptional, IsString, Matches } from 'class-validator';
import { PERSIAN_DATE_REGEX } from '@kansar/common';

/**
 * Data transfer object for calculating people counts within an optional date range.
 *
 * @export
 * @class CalcPeopleDto
 */
export class CalcPeopleDto {
  /**
   * Optional start date in the Persian calendar.
   *
   * Must match the format YYYY-MM-DD according to PERSIAN_DATE_REGEX.
   *
   * @type {string}
   * @memberof CalcPeopleDto
   * @optional
   */
  @IsString()
  @Matches(PERSIAN_DATE_REGEX, {
    message: 'fromDate is not in Format YYYY-MM-DD in Persian Calendar',
  })
  @IsOptional()
  fromDate: string;

  /**
   * Optional end date in the Persian calendar.
   *
   * Must match the format YYYY-MM-DD according to PERSIAN_DATE_REGEX.
   *
   * @type {string}
   * @memberof CalcPeopleDto
   * @optional
   */
  @IsString()
  @Matches(PERSIAN_DATE_REGEX, {
    message: 'toDate is not in Format YYYY-MM-DD in Persian Calendar',
  })
  @IsOptional()
  toDate: string;
}
