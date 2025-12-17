/**
 * @interface IUsersModel
 *  Represents a user record with personal, organizational, and audit information.
 *
 * @property {number} id - Unique identifier for the user record.
 * @property {number} employeeSrl - Serial number assigned to the employee.
 * @property {number} employeeId - Business-specific employee identifier.
 * @property {string|null} rfid - RFID tag associated with the user, if available.
 * @property {string} personName - Given name of the user.
 * @property {string} personFamily - Family name (surname) of the user.
 * @property {string} personFullName - Full name of the user (combination of given and family names).
 * @property {string|null} organizationName - Name of the organization the user belongs to, if any.
 * @property {string|null} organizationUnitName - Name of the specific unit within the organization, if any.
 * @property {string|null} organizationalPostCaption - Title or caption of the user's organizational post, if any.
 * @property {Date} createdAt - Timestamp indicating when the user record was created.
 * @property {Date} updatedAt - Timestamp indicating the last update to the user record.
 */
export interface IUsersModel {
  id: number;
  employeeSrl: number;
  employeeId: number;
  rfid: string | null;
  personName: string;
  personFamily: string;
  personFullName: string;
  organizationName: string | null;
  organizationUnitName: string | null;
  organizationalPostCaption: string | null;
  createdAt: Date;
  updatedAt: Date;
}
