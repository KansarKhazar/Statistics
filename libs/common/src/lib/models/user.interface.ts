export interface IUsersModel {
  id: number;
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
