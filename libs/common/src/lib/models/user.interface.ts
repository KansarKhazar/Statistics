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
