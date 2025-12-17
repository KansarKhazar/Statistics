/**
 * IDailyReportMadaktoReponse
 *
 * Represents the structure of a Madakto Daily report response for an individual,
 * including all calculated fields for attendance, vacations, missions,
 * absences, delays, early exits, overtime, shift functions, and remaining vacations.
 *
 * @interface IDailyReportMadaktoReponse
 */
export interface IDailyReportMadaktoReponse {
  EmployeeId: string;
  FCDayName: string;
  EmployeeFullName: string;
  FCDate: string;
  FCEnterTime1: string;
  FCExitTime1: string;
  FCEnterTime2: string;
  FCExitTime2: string;
  FCEnterTime3: string;
  FCExitTime3: string;
  FCEnterTime4: string;
  FCExitTime4: string;
  FCEnterTime5: string;
  FCExitTime5: string;
  FCEnterTime6: string;
  FCExitTime6: string;
  FCHourlyMeritVacation: string;
  FCDailyMeritVacation: string;
  FCHourlyMedicalVacation: string;
  FCDailyMedicalVacation: string;
  FCHourlyAccidentVacation: string;
  FCDailyAccidentVacation: string;
  FCHourlyOrganizationalVacation: string;
  FCDailyOrganizationalVacation: string;
  FCHourlyWithoutSalaryVacation: string;
  FCDailyWithoutSalaryVacation: string;
  FCDailyWithSalaryMission: string;
  FCHourlyWithSalaryMission: string;
  FCDailyWithoutSalaryMission: string;
  FCHourlyWithoutSalaryMission: string;
  FCDailyMission: string;
  FCHourlyMission: string;
  FCHourlyValidAbsence: string;
  FCDailyValidAbsence: string;
  FCIsRamadan: string;
  FCValidDelayFirstTime: string;
  FCInValidDelayFirstTime: string;
  FCDelayFirstTime: string;
  FCValidEarlyExitEndTime: string;
  FCInValidEarlyExitEndTime: string;
  FCEarlyExitEndTime: string;
  FCConstantOverTime: string;
  FCOverHeadOverTime: string;
  FCValidOvertimeBeforeTime: string;
  FCValidOvertimeAfterTime: string;
  FCInValidOverTimeBeforeTime: string;
  FCInValidOverTimeAfterTime: string;
  FCOverTimeBeforeTime: string;
  FCOverTimeAfterTime: string;
  FCValidOverTime: string;
  FCInvalidOverTime: string;
  FCValidOverTimeInHoliday: string;
  FCInValidOverTimeInHoliday: string;
  FCOverTimeInHoliday: string;
  FCOverTime: string;
  FCExistInShift: string;
  FCValidExist: string;
  FCInvalidExist: string;
  FCDeficincyValue: string;
  FCShiftTypeDetail: string;
  JobGroupName: string;
  FCDayDutyFunction: string;
  FCHourlyShiftFunctionTen: string;
  FCHourlyShiftFunctionFifteen: string;
  FCHourlyShiftFunctionTwentyTwoPointFive: string;
  FCHourlyShiftFunctionThirtyFive: string;
  FCHourlyShiftFunction: string;
  FCDayDescription: string;
  FCDailyFunction: string;
  FCNightlyFunction: string;
  FCDailyInValidAbsence: string;
  VacationRemainderDaily: string;
  VacationRemainderHourly: string;
}
