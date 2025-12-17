import { Global, Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import * as fs from 'fs/promises';
import { constants } from 'fs';
import * as os from 'os';
import * as path from 'path';
// eslint-disable-next-line @nx/enforce-module-boundaries
import MDBReader from 'mdb-reader';

// Internal Imports
import { MDB_CONSTANTS } from './mdb.constant';

@Global()
@Injectable()
export class MdbService {
  async readMdbFromUrl<T>(axios: AxiosInstance, fileName: string) {
    try {
      // 1. Download file to temp
      const tempFilePath = await this.downloadFileToTemp(
        axios,
        `${MDB_CONSTANTS.READ_REQUEST_URL}${fileName}`
      );

      // 2. Load MDB file using mdb-reader
      const fileBuffer = await fs.readFile(tempFilePath);
      const reader = new MDBReader(fileBuffer);

      // 3. Get table
      const tableNames = reader.getTableNames();
      const table = reader.getTable(tableNames[0]); // Assuming first table is the target
      if (!table) {
        throw new Error(`Table ${tableNames[0]} not found in MDB file`);
      }

      const rows = table.getData() as T[];

      // 4. Clean up
      await this.cleanupTempFile(tempFilePath);

      // 5. Return first row (same as original behavior)
      return rows;
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
