import { Global, Module } from '@nestjs/common';
import { MdbService } from './mdb/mdb.service';
import { MadaktoService } from './Madakto/Madakto.service';

@Global()
@Module({
  providers: [MdbService, MadaktoService],
  exports: [MdbService, MadaktoService],
})
export class SharedModule {}
