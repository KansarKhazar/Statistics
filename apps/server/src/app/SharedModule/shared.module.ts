import { Global, Module } from '@nestjs/common';
import { MdbService } from './mdb.service';

@Global()
@Module({
  providers: [MdbService],
  exports: [MdbService],
})
export class SharedModule {}
