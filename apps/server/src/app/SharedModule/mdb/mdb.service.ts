import { Global, Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import * as fs from 'fs/promises';
import { constants } from 'fs';
import * as os from 'os';
import * as path from 'path';
import ADODB from 'node-adodb';

// Internal Imports
import { MDB_CONSTANTS } from './mdb.constant';
import { IMdbResponse } from './mdb.ro';

@Global()
@Injectable()
export class MdbService {
  private connection: ADODB.open | null = null;

  async readMdbFromUrl(
    axios: AxiosInstance,
    fileName: string
  ): Promise<IMdbResponse> {
    try {
      // Download the file to temporary location
      const tempFilePath = await this.downloadFileToTemp(
        axios,
        `${MDB_CONSTANTS.READ_REQUEST_URL}${fileName}`
      );

      // Connect to the MDB file
      this.connection = ADODB.open(
        `Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${tempFilePath};`
      );

      const record = await this.connection.query<IMdbResponse>(
        'SELECT * FROM ReportAll'
      );

      // Clean up temporary file
      await this.cleanupTempFile(tempFilePath);

      return record;
    } catch (e: any) {
      throw new Error(`Failed to read MDB file: ${e.message}`);
    }
  }

  private async downloadFileToTemp(
    axios: AxiosInstance,
    url: string
  ): Promise<string> {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
    });

    const tempDir = os.tmpdir();
    const tempFilePath = path.join(tempDir, `access_${Date.now()}.mdb`);

    await fs.writeFile(tempFilePath, response.data);
    return tempFilePath;
  }

  private async cleanupTempFile(filePath: string): Promise<void> {
    try {
      if (await this.exists(filePath)) {
        await fs.unlink(filePath);
      }
    } catch {
      console.warn(`Could not delete temporary file: ${filePath}`);
    }
  }

  private async exists(path: string): Promise<boolean> {
    try {
      await fs.access(path, constants.F_OK);
      return true;
    } catch {
      return false;
    }
  }
}
