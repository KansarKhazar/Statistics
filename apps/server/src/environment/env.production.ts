import { IEnvironment } from './environment.interface';

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
