/**
 * Represents a monthly attendance report Model for an employee.
 * Contains time entries, vacation and mission details,
 * overtime calculations, absence metrics, and shift information.
 *
 * @interface IWorkingReportsModel
 */
export interface IWorkingReportsModel {
  id: number;
  userId: number;
  fromDate: number;
  toDate: number;
  AttendanceCardNo: number;
  PersonFullName: string;
  FCDailyMeritVacation: number;
  FCHourlyMeritVacation: number;
  FCDailyMedicalVacation: number;
  FCHourlyMedicalVacation: number;
  FCDailyAccidentVacation: number;
  FCHourlyAccidentVacation: number;
  FCDailyOrganizationalVacation: number;
  FCHourlyOrganizationalVacation: number;
  FCDailyWithoutSalaryVacation: number;
  FCHourlyWithoutSalaryVacation: number;
  FCDailyWithSalaryMission: number;
  FCHourlyWithSalaryMission: number;
  FCDailyWithoutSalaryMission: number;
  FCHourlyWithoutSalaryMission: number;
  FCDailyMission: number;
  FCHourlyMission: number;
  FCDailyValidAbsence: number;
  FCHourlyValidAbsence: number;
  FCValidDelayFirstTime: number;
  FCInValidDelayFirstTime: number;
  FCDelayFirstTime: number;
  FCValidEarlyExitEndTime: number;
  FCInValidEarlyExitEndTime: number;
  FCEarlyExitEndTime: number;
  FCConstantOverTime: number;
  FCOverHeadOverTime: number;
  FCValidOvertimeBeforeTime: number;
  FCValidOvertimeAfterTime: number;
  FCInValidOvertimeBeforeTime: number;
  FCInValidOvertimeAfterTime: number;
  FCOverTimeBeforeTime: number;
  FCOverTimeAfterTime: number;
  FCValidOvertime: number;
  FCInValidOvertime: number;
  FCValidOverTimeInHoliday: number;
  FCInValidOverTimeInHoliday: number;
  FCOverTimeInHoliday: number;
  FCOverTime: number;
  FCExistInShift: number;
  FCValidExist: number;
  FCInValidExist: number;
  FCDeficincyValue: number;
  FCDayDutyFunction: number;
  FCHourlyShiftFunctionTen: number;
  FCHourlyShiftFunctionFifteen: number;
  FCHourlyShiftFunctionTwentyTwoPointFive: number;
  FCHourlyShiftFunctionThirtyFive: number;
  FCHourlyShiftFunction: number;
  FCDailyFunction: number;
  FCNightlyFunction: number;
  FCDailyInValidAbsence: number;
  VacationRemainderDaily: number;
  VacationRemainderHourly: number;
  createdAt: Date;
  updatedAt: Date;
}
