import { Global, Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';
import qs from 'qs';
import {
  IDailyReportMadaktoReponse,
  IReportMadaktoReponse,
  IUser,
} from '@kansar/common';

// Internal Imports
import { MADAKTO_CONSTANTS } from './Madakto.constant';
import { MdbService } from '../mdb/mdb.service';

const typedWrapper = wrapper as <T = AxiosInstance>(axiosInstance: T) => T;

/**
 * @class MadaktoService
 * @description
 *   Global service to interact with the Madakto system:
 *   - Manages authentication cookies
 *   - Performs login
 *   - Fetches users and reports
 */
@Global()
@Injectable()
export class MadaktoService {
  private jar: CookieJar;
  private client: AxiosInstance;

  /**
   * @constructor
   * @param mdbService - Service responsible for reading MDB data from a URL
   */
  constructor(private readonly mdbService: MdbService) {
    this.jar = new CookieJar();
    this.client = typedWrapper(
      axios.create({
        jar: this.jar,
        withCredentials: true,
      })
    );
  }

  /**
   * @private
   * @method createCookie
   * @description
   *   Initializes a new cookie jar and axios client instance.
   *   Disables SSL verification for outgoing HTTP requests.
   */
  private async createCookie() {
    // Create a cookie jar
    this.jar = new CookieJar();

    // Set environment variable to disable SSL verification
    // This affects ALL HTTP requests in the process
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    // Create Client Axios with Cookie support
    this.client = typedWrapper(
      axios.create({
        jar: this.jar,
        withCredentials: true,
      })
    );
  }

  /**
   * @method login
   * @description
   *   Performs the login sequence against the Madakto API,
   *   creating and storing authentication cookies.
   * @returns Promise<boolean> - true if login succeeds, false otherwise
   */
  async login() {
    try {
      await this.createCookie();

      // Login Attempt Data for Entry
      const loginPostData = qs.stringify(MADAKTO_CONSTANTS.LOGIN_REQUEST_DTO);

      // Running Login Request
      await this.client.post(
        MADAKTO_CONSTANTS.LOGIN_REQUEST_URL,
        loginPostData
      );

      return true;
    } catch {
      return false;
    }
  }

  /**
   * @method getAllUsers
   * @description
   *   Retrieves a list of all users from Madakto.
   * @param maxRecord - Maximum number of user records to fetch (default: 10000)
   * @returns Promise<IUser[]> - Array of user objects
   */
  async getAllUsers(maxRecord = 10000): Promise<IUser[]> {
    const postUserData = JSON.stringify({
      ...MADAKTO_CONSTANTS.USERS_REQUEST_DTO,
      maxRecord,
    });

    const users = await this.client.post<{ d: IUser[] }>(
      MADAKTO_CONSTANTS.USERS_REQUEST_URL,
      postUserData,
      {
        maxBodyLength: Infinity,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return users.data.d;
  }

  /**
   * @method getReportForUser
   * @description
   *   Fetches a detailed report for a specified user over a date range.
   * @param FromId - Identifier of the report issuer
   * @param ToId - Identifier of the report recipient
   * @param FromDate - Start date of the report period (format: YYYY-MM-DD)
   * @param ToDate - End date of the report period (format: YYYY-MM-DD)
   * @returns Promise<IReportMadaktoReponse> - Parsed report response
   */
  async getReportForUser(
    FromId: string,
    ToId: string,
    FromDate: string,
    ToDate: string
  ) {
    const getUserReportData = JSON.stringify({
      ...MADAKTO_CONSTANTS.REPORT_REQUEST_DTO,
      FromId,
      ToId,
      FromDate: FromDate.replaceAll('-', '/'),
      ToDate: ToDate.replaceAll('-', '/'),
    });

    const response = await this.client.post(
      MADAKTO_CONSTANTS.REPORT_REQUEST_URL,
      getUserReportData,
      {
        maxBodyLength: Infinity,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return await this.mdbService.readMdbFromUrl<IReportMadaktoReponse>(
      this.client,
      response.data.d
    );
  }

  /**
   * @method getDailyReportForUser
   * @description
   *   Fetches a daily aggregated report for a specified user over a date range.
   * @param FromId - Identifier of the report issuer
   * @param ToId - Identifier of the report recipient
   * @param FromDate - Start date for the daily report (format: YYYY-MM-DD)
   * @param ToDate - End date for the daily report (format: YYYY-MM-DD)
   * @returns Promise<IDailyReportMadaktoReponse> - Parsed daily report response
   */
  async getDailyReportForUser(
    FromId: string,
    ToId: string,
    FromDate: string,
    ToDate: string
  ) {
    const getUserDailyReportData = JSON.stringify({
      ...MADAKTO_CONSTANTS.REPORT_DAILY_REQUEST_DTO,
      FromId,
      ToId,
      FromDate: FromDate.replaceAll('-', '/'),
      ToDate: ToDate.replaceAll('-', '/'),
    });

    const response = await this.client.post(
      MADAKTO_CONSTANTS.REPORT_DAILY_REQUEST_URL,
      getUserDailyReportData,
      {
        maxBodyLength: Infinity,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return await this.mdbService.readMdbFromUrl<IDailyReportMadaktoReponse>(
      this.client,
      response.data.d
    );
  }
}
