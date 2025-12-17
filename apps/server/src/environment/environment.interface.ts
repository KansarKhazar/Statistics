export interface IEnvironment {
  MADAKTO_AUTH_USERNAME: string;
  MADAKTO_AUTH_PASSWORD: string;
  DB_TYPE: 'mssql' | 'mysql' | 'postgres' | 'sqlite';
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
  REDIS_HOST: string;
  REDIS_PORT: number;
  QUEUE_DASHBOARD_ROUTE: string;
}
