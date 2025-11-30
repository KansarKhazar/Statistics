import { Global, Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';
import qs from 'qs';

// Internal Imports
import { IUser } from '../../../interfaces';
import { MADAKTO_CONSTANTS } from './Madakto.constant';
import { MdbService } from '../mdb/mdb.service';

const typedWrapper = wrapper as <T = AxiosInstance>(axiosInstance: T) => T;

@Global()
@Injectable()
export class MadaktoService {
  private jar: CookieJar;
  private client: AxiosInstance;

  constructor(private readonly mdbService: MdbService) {
    this.jar = new CookieJar();
    this.client = typedWrapper(
      axios.create({
        jar: this.jar,
        withCredentials: true,
      })
    );
  }

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
      FromDate,
      ToDate,
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

    return await this.mdbService.readMdbFromUrl(this.client, response.data.d);
  }
}
