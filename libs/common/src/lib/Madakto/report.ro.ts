/**
 * IReportMadaktoReponse
 *
 * Represents the structure of a Madakto Monthly report response for an individual,
 * including all calculated fields for attendance, vacations, missions,
 * absences, delays, early exits, overtime, shift functions, and remaining vacations.
 *
 * @interface IReportMadaktoReponse
 */
export interface IReportMadaktoReponse {
  AttendanceCardNo: string;
  PersonFullName: string;
  FCDailyMeritVacation: string;
  FCHourlyMeritVacation: string;
  FCDailyMedicalVacation: string;
  FCHourlyMedicalVacation: string;
  FCDailyAccidentVacation: string;
  FCHourlyAccidentVacation: string;
  FCDailyOrganizationalVacation: string;
  FCHourlyOrganizationalVacation: string;
  FCHourlyWithoutSalaryVacation: string;
  FCDailyWithoutSalaryVacation: string;
  FCDailyWithSalaryMission: string;
  FCHourlyWithSalaryMission: string;
  FCDailyWithoutSalaryMission: string;
  FCHourlyWithoutSalaryMission: string;
  FCDailyMission: string;
  FCHourlyMission: string;
  FCDailyValidAbsence: string;
  FCHourlyValidAbsence: string;
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
  FCInValidOvertimeBeforeTime: string;
  FCInValidOvertimeAfterTime: string;
  FCOverTimeBeforeTime: string;
  FCOverTimeAfterTime: string;
  FCValidOvertime: string;
  FCInValidOvertime: string;
  FCValidOverTimeInHoliday: string;
  FCInValidOverTimeInHoliday: string;
  FCOverTimeInHoliday: string;
  FCOverTime: string;
  FCExistInShift: string;
  FCValidExist: string;
  FCInValidExist: string;
  FCDeficincyValue: string;
  FCDayDutyFunction: string;
  FCHourlyShiftFunctionTen: string;
  FCHourlyShiftFunctionFifteen: string;
  FCHourlyShiftFunctionTwentyTwoPointFive: string;
  FCHourlyShiftFunctionThirtyFive: string;
  FCHourlyShiftFunction: string;
  FCDailyFunction: string;
  FCNightlyFunction: string;
  FCDailyInValidAbsence: string;
  VacationRemainderDaily: string;
  VacationRemainderHourly: string;
}
