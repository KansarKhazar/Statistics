import { Global, Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import ADODB from 'node-adodb';

@Global()
@Injectable()
export class MdbService {
  private connection: ADODB.open | null = null;

  async readMdbFromUrl(axios: AxiosInstance, url: string) {
    try {
      // Download the file to temporary location
      const tempFilePath = await this.downloadFileToTemp(axios, url);

      // Connect to the MDB file
      this.connection = ADODB.open(
        `Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${tempFilePath};`
      );

      const record = await this.connection.query('SELECT * FROM ReportAll');

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

    fs.writeFileSync(tempFilePath, response.data);
    return tempFilePath;
  }

  private async cleanupTempFile(filePath: string): Promise<void> {
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch {
      console.warn(`Could not delete temporary file: ${filePath}`);
    }
  }
}
