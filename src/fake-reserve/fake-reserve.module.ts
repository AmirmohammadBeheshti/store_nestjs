import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FakeReserveController } from './fake-reserve.controller';
import { FakeReserveService } from './fake-reserve.service';
import { FakeReserve, FakeReserveSchema } from './schema/reserve.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FakeReserve.name, schema: FakeReserveSchema },
    ]),
  ],
  providers: [FakeReserveService],
  controllers: [FakeReserveController],
  exports: [FakeReserveService],
})
export class FakeReserveModule {}
