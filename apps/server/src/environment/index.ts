import { development } from './env.development';
import { production } from './env.production';

/**
 * Selects the appropriate environment configuration.
 *
 * Determines which configuration object to use based on the
 * NODE_ENV environment variable. If it equals 'development',
 * the development config is used; otherwise, the production config.
 *
 * @label {typeof development | typeof production} env
 */
export const env =
  process.env.NODE_ENV === 'development' ? development : production;
