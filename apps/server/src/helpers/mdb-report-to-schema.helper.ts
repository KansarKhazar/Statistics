import { IReportMadaktoReponse } from '@kansar/common';
import { WorkingReports } from '../models';
import { normalizeDuration } from './normalize-duration.helper';

/**
 * TMdbReportToSchema
 *
 * Type representing the subset of WorkingReports fields that are populated
 * from an MDB report response. Omits database-managed and relational fields:
 * - id
 * - userId
 * - fromDate
 * - toDate
 * - createdAt
 * - updatedAt
 * - user
 *
 * @typedef {Omit<WorkingReports, 'id' | 'userId' | 'fromDate' | 'toDate' | 'createdAt' | 'updatedAt' | 'user'>} TMdbReportToSchema
 */
export type TMdbReportToSchema = Omit<
  WorkingReports,
  'id' | 'userId' | 'fromDate' | 'toDate' | 'createdAt' | 'updatedAt' | 'user'
>;

/**
 * MdbReportToSchemaHelper
 *
 * Maps an MDB API report object to the internal WorkingReports schema type,
 * transforming and normalizing string-based counts and durations into
 * numeric and normalized duration formats.
 *
 * @param {IReportMadaktoReponse} report - The raw report data from MDB.
 * @returns {TMdbReportToSchema} The mapped schema object ready for persistence.
 */
export const MdbReportToSchemaHelper = (
  report: IReportMadaktoReponse
): TMdbReportToSchema => {
  return {
    AttendanceCardNo: parseInt(report.AttendanceCardNo),
    PersonFullName: report.PersonFullName,
    FCDailyMeritVacation: Number(report.FCDailyMeritVacation) | 0,
    FCHourlyMeritVacation: normalizeDuration(report.FCHourlyMeritVacation),
    FCDailyMedicalVacation: Number(report.FCDailyMedicalVacation) | 0,
    FCHourlyMedicalVacation: normalizeDuration(report.FCHourlyMedicalVacation),
    FCDailyAccidentVacation: Number(report.FCDailyAccidentVacation) | 0,
    FCHourlyAccidentVacation: normalizeDuration(
      report.FCHourlyAccidentVacation
    ),
    FCDailyOrganizationalVacation:
      Number(report.FCDailyOrganizationalVacation) | 0,
    FCHourlyOrganizationalVacation: normalizeDuration(
      report.FCHourlyOrganizationalVacation
    ),
    FCHourlyWithoutSalaryVacation: normalizeDuration(
      report.FCHourlyWithoutSalaryVacation
    ),
    FCDailyWithoutSalaryVacation:
      Number(report.FCDailyWithoutSalaryVacation) | 0,
    FCDailyWithSalaryMission: Number(report.FCDailyWithSalaryMission) | 0,
    FCHourlyWithSalaryMission: normalizeDuration(
      report.FCHourlyWithSalaryMission
    ),
    FCDailyWithoutSalaryMission: Number(report.FCDailyWithoutSalaryMission) | 0,
    FCHourlyWithoutSalaryMission: normalizeDuration(
      report.FCHourlyWithoutSalaryMission
    ),
    FCDailyMission: Number(report.FCDailyMission) | 0,
    FCHourlyMission: normalizeDuration(report.FCHourlyMission),
    FCDailyValidAbsence: Number(report.FCDailyValidAbsence) | 0,
    FCHourlyValidAbsence: normalizeDuration(report.FCHourlyValidAbsence),
    FCValidDelayFirstTime: normalizeDuration(report.FCValidDelayFirstTime),
    FCInValidDelayFirstTime: normalizeDuration(report.FCInValidDelayFirstTime),
    FCDelayFirstTime: normalizeDuration(report.FCDelayFirstTime),
    FCValidEarlyExitEndTime: normalizeDuration(report.FCValidEarlyExitEndTime),
    FCInValidEarlyExitEndTime: normalizeDuration(
      report.FCInValidEarlyExitEndTime
    ),
    FCEarlyExitEndTime: normalizeDuration(report.FCEarlyExitEndTime),
    FCConstantOverTime: normalizeDuration(report.FCConstantOverTime),
    FCOverHeadOverTime: normalizeDuration(report.FCOverHeadOverTime),
    FCValidOvertimeBeforeTime: normalizeDuration(
      report.FCValidOvertimeBeforeTime
    ),
    FCValidOvertimeAfterTime: normalizeDuration(
      report.FCValidOvertimeAfterTime
    ),
    FCInValidOvertimeBeforeTime: normalizeDuration(
      report.FCInValidOvertimeBeforeTime
    ),
    FCInValidOvertimeAfterTime: normalizeDuration(
      report.FCInValidOvertimeAfterTime
    ),
    FCOverTimeBeforeTime: normalizeDuration(report.FCOverTimeBeforeTime),
    FCOverTimeAfterTime: normalizeDuration(report.FCOverTimeAfterTime),
    FCValidOvertime: normalizeDuration(report.FCValidOvertime),
    FCInValidOvertime: normalizeDuration(report.FCInValidOvertime),
    FCValidOverTimeInHoliday: normalizeDuration(
      report.FCValidOverTimeInHoliday
    ),
    FCInValidOverTimeInHoliday: normalizeDuration(
      report.FCInValidOverTimeInHoliday
    ),
    FCOverTimeInHoliday: normalizeDuration(report.FCOverTimeInHoliday),
    FCOverTime: normalizeDuration(report.FCOverTime),
    FCExistInShift: normalizeDuration(report.FCExistInShift),
    FCValidExist: normalizeDuration(report.FCValidExist),
    FCInValidExist: normalizeDuration(report.FCInValidExist),
    FCDeficincyValue: normalizeDuration(report.FCDeficincyValue),
    FCDayDutyFunction: normalizeDuration(report.FCDayDutyFunction),
    FCHourlyShiftFunctionTen: normalizeDuration(
      report.FCHourlyShiftFunctionTen
    ),
    FCHourlyShiftFunctionFifteen: normalizeDuration(
      report.FCHourlyShiftFunctionFifteen
    ),
    FCHourlyShiftFunctionTwentyTwoPointFive: normalizeDuration(
      report.FCHourlyShiftFunctionTwentyTwoPointFive
    ),
    FCHourlyShiftFunctionThirtyFive: normalizeDuration(
      report.FCHourlyShiftFunctionThirtyFive
    ),
    FCHourlyShiftFunction: normalizeDuration(report.FCHourlyShiftFunction),
    FCDailyFunction: Number(report.FCDailyFunction) | 0,
    FCNightlyFunction: Number(report.FCNightlyFunction) | 0,
    FCDailyInValidAbsence: Number(report.FCDailyInValidAbsence) | 0,
    VacationRemainderDaily: Number(report.VacationRemainderDaily) | 0,
    VacationRemainderHourly: normalizeDuration(report.VacationRemainderHourly),
  };
};
