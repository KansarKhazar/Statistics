/**
 * @file index.ts
 * @module EntryPoint
 * @description
 * Main entry point for the Madakto library. Re-exports the public API components:
 * - Enums
 * - Models
 * - Interfaces
 * - Constants
 * - Madakto main class
 *
 * This allows consumers to import directly from the package root.
 *
 * @example
 * import { Madakto, SomeEnum, SomeModel, ISomeInterface, SOME_CONSTANT } from 'madakto';
 */

export * from './lib/enums';
export * from './lib/models';
export * from './lib/interfaces';
export * from './lib/constants';
export * from './lib/Madakto';
