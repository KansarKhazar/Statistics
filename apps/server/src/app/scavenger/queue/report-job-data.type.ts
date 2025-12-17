import { IUser } from '@kansar/common';

/**
 * Payload data required to run a report job.
 *
 * @export
 * @typedef {object} TReportJobData
 * @property {IUser} user         - The user initiating the report.
 * @property {string} startOfMonth - ISO string representing the first moment of the target month.
 * @property {string} now          - ISO string representing the current timestamp.
 */
export type TReportJobData = {
  user: IUser;
  startOfMonth: string;
  now: string;
};
