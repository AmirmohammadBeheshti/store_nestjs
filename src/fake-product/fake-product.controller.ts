import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFakeProduct } from './dto/create-fake-product.dto';
import { FakeProductService } from './fake-product.service';

@ApiTags('Fake Product')
@Controller('fake-product')
export class FakeProductController {
  constructor(private readonly fakeProduct: FakeProductService) {}
  @Post('postFakeProduct')
  postFakeProduct(@Body() createProduct: CreateFakeProduct) {
    return this.fakeProduct.createProduct(createProduct);
  }
}
