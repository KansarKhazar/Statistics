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

/**
 * @global
 * @@Injectable
 *
 * Service for downloading and reading Microsoft Access (.mdb) files from a remote URL.
 * Uses a temporary file system location to store the downloaded file, parses it using
 * the mdb-reader library, and cleans up after reading.
 */
@Global()
@Injectable()
export class MdbService {
  /**
   * Downloads an MDB file from the given URL, reads its first table, and returns the data rows.
   *
   * @template T  The expected shape of each row in the MDB table.
   * @param {AxiosInstance} axios  An instance of Axios for performing HTTP requests.
   * @param {string} fileName      The name of the file to download (appended to the base URL).
   * @throws {Error}               If downloading, parsing, or cleanup fails.
   * @returns {Promise<T[]>}       A promise that resolves with the array of rows from the first table.
   */
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

  /**
   * Downloads a file from the specified URL and saves it to the operating system's temp directory.
   *
   * @param {AxiosInstance} axios  An instance of Axios for performing the download.
   * @param {string} url           The full URL to download the .mdb file from.
   * @returns {Promise<string>}    A promise that resolves with the path to the saved temporary file.
   */
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

  /**
   * Deletes the temporary file at the given path if it exists.
   *
   * @param {string} filePath  The path to the temporary file to remove.
   * @returns {Promise<void>}  A promise that resolves once cleanup is complete.
   */
  private async cleanupTempFile(filePath: string): Promise<void> {
    try {
      if (await this.exists(filePath)) {
        await fs.unlink(filePath);
      }
    } catch {
      console.warn(`Could not delete temporary file: ${filePath}`);
    }
  }

  /**
   * Checks whether a file exists at the specified path.
   *
   * @param {string} path  The filesystem path to check.
   * @returns {Promise<boolean>}  A promise that resolves to true if the file exists, false otherwise.
   */
  private async exists(path: string): Promise<boolean> {
    try {
      await fs.access(path, constants.F_OK);
      return true;
    } catch {
      return false;
    }
  }
}
