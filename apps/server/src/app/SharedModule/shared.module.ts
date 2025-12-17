import { Global, Module } from '@nestjs/common';

import { MdbService } from './mdb/mdb.service';
import { MadaktoService } from './Madakto/Madakto.service';

/**
 * SharedModule
 *
 * A global NestJS module that registers and exports common services used
 * throughout the application.
 *
 * @module SharedModule
 */
@Global()
@Module({
  providers: [MdbService, MadaktoService],
  exports: [MdbService, MadaktoService],
})
export class SharedModule {}
