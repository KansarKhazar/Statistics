import { IDailyReportMadaktoReponse } from '@kansar/common';

import { DailyReport } from '../models';
import { normalizeTime } from './normalize-time.helper';
import { normalizeDuration } from './normalize-duration.helper';

export type TMdbDailyReportToSchema = Omit<
  DailyReport,
  'id' | 'userId' | 'createdAt' | 'updatedAt' | 'user'
>;

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
