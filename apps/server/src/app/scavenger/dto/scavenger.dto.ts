import { IsOptional, IsString, Matches } from 'class-validator';
import { PERSIAN_DATE_REGEX } from '@kansar/common';

export class CalcPeopleDto {
  @IsString()
  @Matches(PERSIAN_DATE_REGEX, {
    message: 'fromDate is not in Format YYYY/MM/DD in Persian Calendar',
  })
  @IsOptional()
  fromDate: string;

  @IsString()
  @Matches(PERSIAN_DATE_REGEX, {
    message: 'toDate is not in Format YYYY/MM/DD in Persian Calendar',
  })
  @IsOptional()
  toDate: string;
}
