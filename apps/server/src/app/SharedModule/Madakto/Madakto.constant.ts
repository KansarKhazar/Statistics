import { env } from '../../../environment';

/**
 * A collection of MADAKTO-related constants, including endpoint URLs and
 * default DTO payloads for various API operations (login, user fetching,
 * full reports, and daily reports).
 *
 * @namespace MADAKTO_CONSTANTS
 */
export const MADAKTO_CONSTANTS = {
  /**
   * URL to send the login request to the MADAKTO system.
   *
   * @type {string}
   */
  LOGIN_REQUEST_URL: 'https://10.139.1.46/Madakto/Login',

  /**
   * Default data transfer object for the login request.
   * Includes hidden form state fields and credential placeholders that
   * are populated from environment variables.
   *
   * @type {object}
   */
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

  /**
   * URL to fetch the list of users (employees) from MADAKTO.
   *
   * @type {string}
   */
  USERS_REQUEST_URL:
    'https://10.139.1.46/Madakto/Facade/Personnel/EmployeesService.asmx/getEmployeesWithSearchService',

  /**
   * Default data transfer object for requesting the users list.
   * Provides pagination, ordering, and filter fields.
   *
   * @type {object}
   */
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

  /**
   * URL to generate and retrieve a full access report file for a user.
   *
   * @type {string}
   */
  REPORT_REQUEST_URL:
    'https://10.139.1.46/Madakto/Facade/Reports/Attendance/ReportAllOptionService.asmx/GetAccessReportFileService',

  /**
   * Default data transfer object for requesting the full user report.
   * Contains selection filters, output format flags, and report column settings.
   *
   * @type {object}
   */
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

  /**
   * URL to generate and retrieve a daily access report file for a user.
   *
   * @type {string}
   */
  REPORT_DAILY_REQUEST_URL:
    'https://10.139.1.46/Madakto/Facade/Reports/Attendance/ReportOptionService.asmx/GetAccessReportFileService',

  /**
   * Default data transfer object for requesting the daily user report.
   * Similar to the full report DTO but with a reduced set of columns.
   *
   * @type {object}
   */
  REPORT_DAILY_REQUEST_DTO: {
    SelectedOrganizationUnitsSrls: '',
    EmploymentType: '0',
    OrderByField: '0',
    Options:
      '1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0',
    OrganizationUnitsSrl: '',
    EmployeesSrl: '',
    OrganizationSrl: '-1',
    TitleOrder:
      'روزÅ1ÅتاریخÅ2Åورود1Å3Åخروج1Å4Åورود2Å5Åخروج2Å6Åورود3Å7Åخروج3Å8Åورود4Å9Åخروج4Å10Åورود5Å11Åخروج5Å12Åورود6Å13Åخروج6Å14Åمرخصی استحقاقی ساعتیÅ15Åمرخصی استحقاقی روزانهÅ16Åمرخصی استعلاجی ساعتیÅ17Åمرخصی استعلاجی روزانهÅ18Åمرخصی حادثه ساعتیÅ19Åمرخصی حادثه روزانهÅ20Åمرخصی سازمانی ساعتیÅ21Åمرخصی سازمانی روزانهÅ22Åمرخصی بدون حقوق ساعتیÅ23Åمرخصی بدون حقوق روزانهÅ24Åماموریت باحقوق ساعتیÅ25Åماموریت باحقوق روزانهÅ26Åماموریت بدون حقوق ساعتیÅ27Åماموریت بدون حقوق روزانهÅ28Åکل ماموریت ساعتیÅ29Åکل ماموریت روزانهÅ30Åغیبت ساعتیÅ31Åغیبت مجاز روزانهÅ32Åماه رمضانÅ33Åفیلد شخصی سازی1Å34Åفیلد شخصی سازی2Å35Åفیلد شخصی سازی3Å36Åفیلد شخصی سازی4Å37Åنوبت کاریÅ38Åاضافه کار مجاز قبل وقتÅ39Åاضافه کار مجاز بعد وقتÅ40Åاضافه کار غیرمجاز قبل وقتÅ41Åاضافه کار غیرمجاز بعد وقتÅ42Åاضافه کار ثابتÅ43Åکل اضافه کار قبل وقتÅ44Åکل اضافه کار بعد وقتÅ45Åکل اضافه کار مجازÅ46Åکل اضافه کار غیرمجازÅ47Åاضافه کار تعطیل مجازÅ48Åاضافه کار تعطیل غیرمجازÅ49Åکل اضافه کار تعطیلÅ50Åکل اضافه کارÅ51Åحضور در شیفتÅ52Åکل حضور مجازÅ53Åکل حضورÅ54Åتاخیر مجاز اول وقتÅ55Åتاخیر غیرمجاز اول وقتÅ56Åکل تاخیر اول وقتÅ57Åتعجیل مجاز آخر وقتÅ58Åتعجیل غیرمجاز آخر وقتÅ59Åکل تعجیل آخر وقتÅ60Åکسر کارÅ61ÅشیفتÅ62Åگروه کاریÅ63Åخلاصه کلÅ64Åکارکرد موظفیÅ65Åغیبت غیر مجاز روزانهÅ66Åکارکرد روزانهÅ67Åشب کاریÅ68ÅتوضیحاتÅ69Åمانده مرخصی(به روز)Å70Åمانده مرخصی(تا ساعت)Å71Å',
    DefaultValue: 0,
    TextOrExcel: false,
    OrganizationName: '',
    OrganizationUnitName: '',
    EmployeeName: '',
    SelectedEmployeesSrlList: '',
    FormulaExpression: '',
    CustomizationField1: '',
    CustomizationField2: '',
    CustomizationField3: '',
    CustomizationField4: '',
    SelectedDevicesSrlList: '',
    SelectedDatesList: '',
  },
};
