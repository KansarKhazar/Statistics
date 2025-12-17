import { IDailyReportMadaktoReponse } from '@kansar/common';

import { DailyReport } from '../models';
import { normalizeTime } from './normalize-time.helper';
import { normalizeDuration } from './normalize-duration.helper';

/**
 * @typedef TMdbDailyReportToSchema
 * @property {number} EmployeeId - Parsed integer ID of the employee.
 * @property {string} FCDayName - Name of the day.
 * @property {string} EmployeeFullName - Full name of the employee.
 * @property {string} FCDate - Date in YYYY-MM-DD format.
 * @property {string} FCEnterTime1 - Normalized time for first entry.
 * @property {string} FCExitTime1 - Normalized time for first exit.
 * @property {string} FCEnterTime2 - Normalized time for second entry.
 * @property {string} FCExitTime2 - Normalized time for second exit.
 * @property {string} FCEnterTime3 - Normalized time for third entry.
 * @property {string} FCExitTime3 - Normalized time for third exit.
 * @property {string} FCEnterTime4 - Normalized time for fourth entry.
 * @property {string} FCExitTime4 - Normalized time for fourth exit.
 * @property {string} FCEnterTime5 - Normalized time for fifth entry.
 * @property {string} FCExitTime5 - Normalized time for fifth exit.
 * @property {string} FCEnterTime6 - Normalized time for sixth entry.
 * @property {string} FCExitTime6 - Normalized time for sixth exit.
 * @property {string} FCHourlyMeritVacation - Duration of merit vacation (hourly).
 * @property {number} FCDailyMeritVacation - Duration of merit vacation (daily).
 * @property {string} FCHourlyMedicalVacation - Duration of medical vacation (hourly).
 * @property {number} FCDailyMedicalVacation - Duration of medical vacation (daily).
 * @property {string} FCHourlyAccidentVacation - Duration of accident vacation (hourly).
 * @property {number} FCDailyAccidentVacation - Duration of accident vacation (daily).
 * @property {string} FCHourlyOrganizationalVacation - Organizational vacation (hourly).
 * @property {number} FCDailyOrganizationalVacation - Organizational vacation (daily).
 * @property {string} FCHourlyWithoutSalaryVacation - Unpaid vacation (hourly).
 * @property {number} FCDailyWithoutSalaryVacation - Unpaid vacation (daily).
 * @property {number} FCDailyWithSalaryMission - Paid mission time (daily).
 * @property {string} FCHourlyWithSalaryMission - Paid mission time (hourly).
 * @property {number} FCDailyWithoutSalaryMission - Unpaid mission time (daily).
 * @property {string} FCHourlyWithoutSalaryMission - Unpaid mission time (hourly).
 * @property {number} FCDailyMission - Total mission time (daily).
 * @property {string} FCHourlyMission - Total mission time (hourly).
 * @property {string} FCHourlyValidAbsence - Valid absence duration (hourly).
 * @property {number} FCDailyValidAbsence - Valid absence duration (daily).
 * @property {number} FCIsRamadan - Flag indicating Ramadan (0 = no, 1 = yes).
 * @property {string} FCValidDelayFirstTime - Valid first delay duration.
 * @property {string} FCInValidDelayFirstTime - Invalid first delay duration.
 * @property {string} FCDelayFirstTime - Total first delay duration.
 * @property {string} FCValidEarlyExitEndTime - Valid early exit duration.
 * @property {string} FCInValidEarlyExitEndTime - Invalid early exit duration.
 * @property {string} FCEarlyExitEndTime - Total early exit duration.
 * @property {string} FCConstantOverTime - Constant overtime duration.
 * @property {string} FCOverHeadOverTime - Overhead overtime duration.
 * @property {string} FCValidOvertimeBeforeTime - Valid overtime before shift.
 * @property {string} FCValidOvertimeAfterTime - Valid overtime after shift.
 * @property {string} FCInValidOverTimeBeforeTime - Invalid overtime before shift.
 * @property {string} FCInValidOverTimeAfterTime - Invalid overtime after shift.
 * @property {string} FCOverTimeBeforeTime - Total overtime before shift.
 * @property {string} FCOverTimeAfterTime - Total overtime after shift.
 * @property {string} FCValidOverTime - Valid total overtime.
 * @property {string} FCInvalidOverTime - Invalid total overtime.
 * @property {string} FCValidOverTimeInHoliday - Valid holiday overtime.
 * @property {string} FCInValidOverTimeInHoliday - Invalid holiday overtime.
 * @property {string} FCOverTimeInHoliday - Total holiday overtime.
 * @property {string} FCOverTime - Overall overtime.
 * @property {string} FCExistInShift - Time present in shift.
 * @property {string} FCValidExist - Valid presence duration.
 * @property {string} FCInvalidExist - Invalid presence duration.
 * @property {string} FCDeficincyValue - Deficiency duration.
 * @property {string} FCShiftTypeDetail - Description of shift type.
 * @property {string} JobGroupName - Name of the job group.
 * @property {string} FCDayDutyFunction - Duty function time (daily).
 * @property {string} FCHourlyShiftFunctionTen - Shift function at 10% rate.
 * @property {string} FCHourlyShiftFunctionFifteen - Shift function at 15% rate.
 * @property {string} FCHourlyShiftFunctionTwentyTwoPointFive - Shift function at 22.5% rate.
 * @property {string} FCHourlyShiftFunctionThirtyFive - Shift function at 35% rate.
 * @property {string} FCHourlyShiftFunction - General shift function duration.
 * @property {string} FCDayDescription - Description for the day.
 * @property {number} FCDailyFunction - Daily function metric.
 * @property {number} FCNightlyFunction - Nightly function metric.
 * @property {number} FCDailyInValidAbsence - Daily invalid absence count.
 * @property {number} VacationRemainderDaily - Remaining vacation (daily).
 * @property {string} VacationRemainderHourly - Remaining vacation (hourly).
 */
export type TMdbDailyReportToSchema = Omit<
  DailyReport,
  'id' | 'userId' | 'createdAt' | 'updatedAt' | 'user'
>;

/**
 * Transforms a raw daily report response into the TMdbDailyReportToSchema shape.
 *
 * @param {IDailyReportMadaktoReponse} report - The source daily report data from Madakto service.
 * @returns {TMdbDailyReportToSchema} The normalized and typed daily report ready for persistence.
 */
export const MdbDailyReportToSchemaHelper = (
  report: IDailyReportMadaktoReponse
): TMdbDailyReportToSchema => {
  return {
    EmployeeId: parseInt(report.EmployeeId),
    FCDayName: report.FCDayName,
    EmployeeFullName: report.EmployeeFullName,
    FCDate: report.FCDate.replaceAll('/', '-'),
    FCEnterTime1: normalizeTime(report.FCEnterTime1),
    FCExitTime1: normalizeTime(report.FCExitTime1),
    FCEnterTime2: normalizeTime(report.FCEnterTime2),
    FCExitTime2: normalizeTime(report.FCExitTime2),
    FCEnterTime3: normalizeTime(report.FCEnterTime3),
    FCExitTime3: normalizeTime(report.FCExitTime3),
    FCEnterTime4: normalizeTime(report.FCEnterTime4),
    FCExitTime4: normalizeTime(report.FCExitTime4),
    FCEnterTime5: normalizeTime(report.FCEnterTime5),
    FCExitTime5: normalizeTime(report.FCExitTime5),
    FCEnterTime6: normalizeTime(report.FCEnterTime6),
    FCExitTime6: normalizeTime(report.FCExitTime6),
    FCHourlyMeritVacation: normalizeDuration(report.FCHourlyMeritVacation),
    FCDailyMeritVacation: Number(report.FCDailyMeritVacation),
    FCHourlyMedicalVacation: normalizeDuration(report.FCHourlyMedicalVacation),
    FCDailyMedicalVacation: Number(report.FCDailyMedicalVacation),
    FCHourlyAccidentVacation: normalizeDuration(
      report.FCHourlyAccidentVacation
    ),
    FCDailyAccidentVacation: Number(report.FCDailyAccidentVacation),
    FCHourlyOrganizationalVacation: normalizeDuration(
      report.FCHourlyOrganizationalVacation
    ),
    FCDailyOrganizationalVacation: Number(report.FCDailyOrganizationalVacation),
    FCHourlyWithoutSalaryVacation: normalizeDuration(
      report.FCHourlyWithoutSalaryVacation
    ),
    FCDailyWithoutSalaryVacation: Number(report.FCDailyWithoutSalaryVacation),
    FCDailyWithSalaryMission: Number(report.FCDailyWithSalaryMission),
    FCHourlyWithSalaryMission: normalizeDuration(
      report.FCHourlyWithSalaryMission
    ),
    FCDailyWithoutSalaryMission: Number(report.FCDailyWithoutSalaryMission),
    FCHourlyWithoutSalaryMission: normalizeDuration(
      report.FCHourlyWithoutSalaryMission
    ),
    FCDailyMission: Number(report.FCDailyMission),
    FCHourlyMission: normalizeDuration(report.FCHourlyMission),
    FCHourlyValidAbsence: normalizeDuration(report.FCHourlyValidAbsence),
    FCDailyValidAbsence: Number(report.FCDailyValidAbsence),
    FCIsRamadan: report.FCIsRamadan === 'خیر' ? 0 : 1,
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
    FCInValidOverTimeBeforeTime: normalizeDuration(
      report.FCInValidOverTimeBeforeTime
    ),
    FCInValidOverTimeAfterTime: normalizeDuration(
      report.FCInValidOverTimeAfterTime
    ),
    FCOverTimeBeforeTime: normalizeDuration(report.FCOverTimeBeforeTime),
    FCOverTimeAfterTime: normalizeDuration(report.FCOverTimeAfterTime),
    FCValidOverTime: normalizeDuration(report.FCValidOverTime),
    FCInvalidOverTime: normalizeDuration(report.FCInvalidOverTime),
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
    FCInvalidExist: normalizeDuration(report.FCInvalidExist),
    FCDeficincyValue: normalizeDuration(report.FCDeficincyValue),
    FCShiftTypeDetail: String(report.FCShiftTypeDetail),
    JobGroupName: String(report.JobGroupName),
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
    FCDayDescription: String(report.FCDayDescription),
    FCDailyFunction: Number(report.FCDailyFunction),
    FCNightlyFunction: Number(report.FCNightlyFunction),
    FCDailyInValidAbsence: Number(report.FCDailyInValidAbsence),
    VacationRemainderDaily: Number(report.VacationRemainderDaily),
    VacationRemainderHourly: normalizeDuration(report.VacationRemainderHourly),
  };
};
