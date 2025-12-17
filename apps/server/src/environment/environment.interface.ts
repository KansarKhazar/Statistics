/**
 * Defines the required environment variables for configuring the application.
 *
 * @interface IEnvironment
 */
export interface IEnvironment {
  /**
   * @property {string} MADAKTO_AUTH_USERNAME
   * @description Username for authenticating with the Madakto service.
   */
  MADAKTO_AUTH_USERNAME: string;

  /**
   * @property {string} MADAKTO_AUTH_PASSWORD
   * @description Password for authenticating with the Madakto service.
   */
  MADAKTO_AUTH_PASSWORD: string;

  /**
   * @property {'mssql' | 'mysql' | 'postgres' | 'sqlite'} DB_TYPE
   * @description Type of the database being used by the application.
   */
  DB_TYPE: 'mssql' | 'mysql' | 'postgres' | 'sqlite';

  /**
   * @property {string} DB_HOST
   * @description Hostname or IP address of the database server.
   */
  DB_HOST: string;

  /**
   * @property {number} DB_PORT
   * @description Port number on which the database server is listening.
   */
  DB_PORT: number;

  /**
   * @property {string} DB_USERNAME
   * @description Username for connecting to the database.
   */
  DB_USERNAME: string;

  /**
   * @property {string} DB_PASSWORD
   * @description Password for connecting to the database.
   */
  DB_PASSWORD: string;

  /**
   * @property {string} DB_DATABASE
   * @description Name of the database to connect to.
   */
  DB_DATABASE: string;

  /**
   * @property {string} REDIS_HOST
   * @description Hostname or IP address of the Redis server.
   */
  REDIS_HOST: string;

  /**
   * @property {number} REDIS_PORT
   * @description Port number on which the Redis server is listening.
   */
  REDIS_PORT: number;

  /**
   * @property {string} QUEUE_DASHBOARD_ROUTE
   * @description Base route used for the queue dashboard in the application.
   */
  QUEUE_DASHBOARD_ROUTE: string;
}
