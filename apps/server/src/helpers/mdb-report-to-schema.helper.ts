import { IMdbResponse } from '../app/SharedModule/mdb/mdb.ro';
import { WorkingReports } from '../models';
import { normalizeTime } from './normalize-time.helper';

export type TMdbReportToSchema = Omit<
  WorkingReports,
  'id' | 'userId' | 'fromDate' | 'toDate' | 'createdAt' | 'updatedAt' | 'user'
>;

export const MdbReportToSchemaHelper = (
  report: IMdbResponse
): TMdbReportToSchema => {
  return {
    AttendanceCardNo: parseInt(report.AttendanceCardNo),
    PersonFullName: report.PersonFullName,
    FCDailyMeritVacation: Number(report.FCDailyMeritVacation) | 0,
    FCHourlyMeritVacation: normalizeTime(report.FCHourlyMeritVacation),
    FCDailyMedicalVacation: Number(report.FCDailyMedicalVacation) | 0,
    FCHourlyMedicalVacation: normalizeTime(report.FCHourlyMedicalVacation),
    FCDailyAccidentVacation: Number(report.FCDailyAccidentVacation) | 0,
    FCHourlyAccidentVacation: normalizeTime(report.FCHourlyAccidentVacation),
    FCDailyOrganizationalVacation:
      Number(report.FCDailyOrganizationalVacation) | 0,
    FCHourlyOrganizationalVacation: normalizeTime(
      report.FCHourlyOrganizationalVacation
    ),
    FCHourlyWithoutSalaryVacation: normalizeTime(
      report.FCHourlyWithoutSalaryVacation
    ),
    FCDailyWithoutSalaryVacation:
      Number(report.FCDailyWithoutSalaryVacation) | 0,
    FCDailyWithSalaryMission: Number(report.FCDailyWithSalaryMission) | 0,
    FCHourlyWithSalaryMission: normalizeTime(report.FCHourlyWithSalaryMission),
    FCDailyWithoutSalaryMission: Number(report.FCDailyWithoutSalaryMission) | 0,
    FCHourlyWithoutSalaryMission: normalizeTime(
      report.FCHourlyWithoutSalaryMission
    ),
    FCDailyMission: Number(report.FCDailyMission) | 0,
    FCHourlyMission: normalizeTime(report.FCHourlyMission),
    FCDailyValidAbsence: Number(report.FCDailyValidAbsence) | 0,
    FCHourlyValidAbsence: normalizeTime(report.FCHourlyValidAbsence),
    FCValidDelayFirstTime: normalizeTime(report.FCValidDelayFirstTime),
    FCInValidDelayFirstTime: normalizeTime(report.FCInValidDelayFirstTime),
    FCDelayFirstTime: normalizeTime(report.FCDelayFirstTime),
    FCValidEarlyExitEndTime: normalizeTime(report.FCValidEarlyExitEndTime),
    FCInValidEarlyExitEndTime: normalizeTime(report.FCInValidEarlyExitEndTime),
    FCEarlyExitEndTime: normalizeTime(report.FCEarlyExitEndTime),
    FCConstantOverTime: normalizeTime(report.FCConstantOverTime),
    FCOverHeadOverTime: normalizeTime(report.FCOverHeadOverTime),
    FCValidOvertimeBeforeTime: normalizeTime(report.FCValidOvertimeBeforeTime),
    FCValidOvertimeAfterTime: normalizeTime(report.FCValidOvertimeAfterTime),
    FCInValidOvertimeBeforeTime: normalizeTime(
      report.FCInValidOvertimeBeforeTime
    ),
    FCInValidOvertimeAfterTime: normalizeTime(
      report.FCInValidOvertimeAfterTime
    ),
    FCOverTimeBeforeTime: normalizeTime(report.FCOverTimeBeforeTime),
    FCOverTimeAfterTime: normalizeTime(report.FCOverTimeAfterTime),
    FCValidOvertime: normalizeTime(report.FCValidOvertime),
    FCInValidOvertime: normalizeTime(report.FCInValidOvertime),
    FCValidOverTimeInHoliday: normalizeTime(report.FCValidOverTimeInHoliday),
    FCInValidOverTimeInHoliday: normalizeTime(
      report.FCInValidOverTimeInHoliday
    ),
    FCOverTimeInHoliday: normalizeTime(report.FCOverTimeInHoliday),
    FCOverTime: normalizeTime(report.FCOverTime),
    FCExistInShift: normalizeTime(report.FCExistInShift),
    FCValidExist: normalizeTime(report.FCValidExist),
    FCInValidExist: normalizeTime(report.FCInValidExist),
    FCDeficincyValue: normalizeTime(report.FCDeficincyValue),
    FCDayDutyFunction: normalizeTime(report.FCDayDutyFunction),
    FCHourlyShiftFunctionTen: normalizeTime(report.FCHourlyShiftFunctionTen),
    FCHourlyShiftFunctionFifteen: normalizeTime(
      report.FCHourlyShiftFunctionFifteen
    ),
    FCHourlyShiftFunctionTwentyTwoPointFive: normalizeTime(
      report.FCHourlyShiftFunctionTwentyTwoPointFive
    ),
    FCHourlyShiftFunctionThirtyFive: normalizeTime(
      report.FCHourlyShiftFunctionThirtyFive
    ),
    FCHourlyShiftFunction: normalizeTime(report.FCHourlyShiftFunction),
    FCDailyFunction: Number(report.FCDailyFunction) | 0,
    FCNightlyFunction: Number(report.FCNightlyFunction) | 0,
    FCDailyInValidAbsence: Number(report.FCDailyInValidAbsence) | 0,
    VacationRemainderDaily: Number(report.VacationRemainderDaily) | 0,
    VacationRemainderHourly: normalizeTime(report.VacationRemainderHourly),
  };
};
