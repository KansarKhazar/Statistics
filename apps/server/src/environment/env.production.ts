/**
 * @label env.production.ts
 *  Production environment configuration for the application.
 */

import { IEnvironment } from './environment.interface';

/**
 * Production environment settings.
 *
 * @label {IEnvironment} production - The production environment variables.
 * @property {string} MADAKTO_AUTH_USERNAME      - Username for Madakto authentication.
 * @property {string} MADAKTO_AUTH_PASSWORD      - Password for Madakto authentication.
 * @property {string} DB_TYPE                    - Type of the database (e.g., 'mssql').
 * @property {string} DB_HOST                    - Host address of the database.
 * @property {number} DB_PORT                    - Port number of the database.
 * @property {string} DB_USERNAME                - Username for the database connection.
 * @property {string} DB_PASSWORD                - Password for the database connection.
 * @property {string} DB_DATABASE                - Name of the database.
 * @property {string} REDIS_HOST                 - Host address of the Redis server.
 * @property {number} REDIS_PORT                 - Port number of the Redis server.
 * @property {string} QUEUE_DASHBOARD_ROUTE      - API route for the dashboard queue.
 */
export const production: IEnvironment = {
  MADAKTO_AUTH_USERNAME: 'S.Parviz',
  MADAKTO_AUTH_PASSWORD: 'S@123456*',
  DB_TYPE: 'mssql',
  DB_HOST: 'localhost',
  DB_PORT: 1433,
  DB_USERNAME: 'sa',
  DB_PASSWORD: 'Sasan@123',
  DB_DATABASE: 'warehouse',
  REDIS_HOST: 'localhost',
  REDIS_PORT: 6379,
  QUEUE_DASHBOARD_ROUTE: '/dashboard',
};
