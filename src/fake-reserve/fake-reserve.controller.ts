import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FakeProductService } from 'src/fake-product/fake-product.service';
import { CreateFakeReserve } from './dto/reserve.dto';
import { FakeReserveService } from './fake-reserve.service';
import { FakeReserve } from './schema/reserve.schema';

@ApiTags('Fake Reserve')
@Controller('fake-reserve')
export class FakeReserveController {
  constructor(private readonly fakeReserve: FakeReserveService) {}

  @Post('FakeReserve')
  fakeReserveProduct(@Body() reserve: CreateFakeReserve) {
    return this.fakeReserve.reserved(reserve);
  }
}
