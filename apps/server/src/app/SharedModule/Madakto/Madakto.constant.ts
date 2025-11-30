import { env } from '../../../environment';

export const MADAKTO_CONSTANTS = {
  LOGIN_REQUEST_URL: 'https://10.139.1.46/Madakto/Login',
  LOGIN_REQUEST_DTO: {
    __VIEWSTATE:
      '/wEPDwUJNDIyMDg0NzgwD2QWAmYPZBYCAgEPZBYCAgEPZBYKZg8QZBAVASbaqdin2LHYqNixINiz2KfZhdin2YbZhyDZhdin2K/Yp9qp2KrZiBUBATAUKwMBZ2RkAgMPFgIeB1Zpc2libGVoZAIEDxYCHwBoZAIFDxYCHwBoZAIHDw9kFgIeBXN0eWxlBQ9jdXJzb3I6cG9pbnRlcjtkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYBBSRjdGwwMCRDb250ZW50UGxhY2VIb2xkZXIxJFJlbWVtYmVyTWWBViWlR6XY+2b5qq+EkQi9fm7KCoRA8oQ08cF/1vs95w==',
    ctl00$ContentPlaceHolder1$selConnectType: '0',
    ctl00$ContentPlaceHolder1$txtUserCode: env.MADAKTO_AUTH_USERNAME,
    ctl00$ContentPlaceHolder1$txtPassword: env.MADAKTO_AUTH_PASSWORD,
    ctl00$ContentPlaceHolder1$btnLogin: 'درحال انتقال...',
    __VIEWSTATEGENERATOR: 'AB4998C5',
    __EVENTVALIDATION:
      '/wEdAAXaKMI2zr1qF6kDy+oyxANquaZaNTD5QwewdJqajpmO1IiVidHTGamuEinfWG21MPl447MIsoZvoOiqHcKGwv3zsEuMZ1vGSFQdOl+6KbBw5DuqpSYb9bjm7bfdoSrkJ8bWO4jVRB4e1t404lsmcHeP',
  },
  USERS_REQUEST_URL:
    'https://10.139.1.46/Madakto/Facade/Personnel/EmployeesService.asmx/getEmployeesWithSearchService',
  USERS_REQUEST_DTO: {
    startRecord: 0,
    maxRecord: 10000,
    OrderByClause: 'EmployeeId ASC',
    EmployeeId: 0,
    EmploymentTypeSrl: -1,
    OrganizationUnitSrl: -1,
    PersonNationalityCode: '',
    OrganizationalPostSrl: -1,
    AttendanceCardNo: 0,
    EducationCertificateSrl: -1,
    PersonName: '',
    PersonFamily: '',
    PersonDescription: '',
    UserSrl: -1,
    OrganizationSrl: -1,
    OrganizationUnitsSrl: '',
    EmployeesSrl: '',
    PersonActive: 0,
  },
  REPORT_REQUEST_URL:
    'https://10.139.1.46/Madakto/Facade/Reports/Attendance/ReportAllOptionService.asmx/GetAccessReportFileService',
  REPORT_REQUEST_DTO: {
    SelectedOrganizationUnitsSrls: '',
    EmploymentType: '0',
    OrderByField: '0',
    Options:
      '1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0',
    TextOrExcel: false,
    OrganizationUnitsSrl: '',
    EmployeesSrl: '',
    OrganizationSrl: '-1',
    TitleOrder:
      'مرخصی استحقاقی ساعتیÅ1Åمرخصی استحقاقی روزانهÅ2Åمرخصی استعلاجی ساعتیÅ3Åمرخصی استعلاجی روزانهÅ4Åمرخصی حادثه ساعتیÅ5Åمرخصی حادثه روزانهÅ6Åمرخصی سازمانی ساعتیÅ7Åمرخصی سازمانی روزانهÅ8Åمرخصی بدون حقوق ساعتیÅ9Åمرخصی بدون حقوق روزانهÅ10Åماموریت باحقوق ساعتیÅ11Åماموریت باحقوق روزانهÅ12Åماموریت بدون حقوق ساعتیÅ13Åماموریت بدون حقوق روزانهÅ14Åکل ماموریت ساعتیÅ15Åکل ماموریت روزانهÅ16Åغیبت ساعتیÅ17Åغیبت مجاز روزانهÅ18Åفیلد شخصی سازی1Å19Åفیلد شخصی سازی2Å20Åفیلد شخصی سازی3Å21Åفیلد شخصی سازی4Å22Åنوبت کاریÅ23Åاضافه کار مجاز قبل وقتÅ24Åاضافه کار مجاز بعد وقتÅ25Åاضافه کار غیرمجاز قبل وقتÅ26Åاضافه کار غیرمجاز بعد وقتÅ27Åاضافه کار ثابتÅ28Åکل اضافه کار قبل وقتÅ29Åکل اضافه کار بعد وقتÅ30Åکل اضافه کار مجازÅ31Åکل اضافه کار غیرمجازÅ32Åاضافه کار تعطیل مجازÅ33Åاضافه کار تعطیل غیرمجازÅ34Åکل اضافه کار تعطیلÅ35Åکل اضافه کارÅ36Åحضور در شیفتÅ37Åکل حضور مجازÅ38Åکل حضورÅ39Åتاخیر مجاز اول وقتÅ40Åتاخیر غیرمجاز اول وقتÅ41Åکل تاخیر اول وقتÅ42Åتعجیل مجاز آخر وقتÅ43Åتعجیل غیرمجاز آخر وقتÅ44Åکل تعجیل آخر وقتÅ45Åکسر کارÅ46Åخلاصه ترددÅ47Åخلاصه کلÅ48Åکارکرد موظفیÅ49Åغیبت غیر مجاز روزانهÅ50Åکارکرد روزانهÅ51Åشب کاریÅ52Åمانده مرخصی(روز)Å53Åمانده مرخصی(تا ساعت)Å54Å',
    OrganizationName: '',
    OrganizationUnitName: '',
    EmployeeName: '',
    SelectedEmployeesSrlList: '',
    FormulaExpression: '',
    CustomizationField1: '',
    CustomizationField2: '',
    CustomizationField3: '',
    CustomizationField4: '',
    NotSelectEmploymentTypeCodes: '',
    NotCalculateEmploymentTypeCodes: '',
    SelectedDevicesSrlList: '',
    SelectedDatesList: '',
  },
};
