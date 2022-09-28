import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateFakeProduct } from './dto/create-fake-product.dto';
import { FakeProductController } from './fake-product.controller';
import { FakeProductService } from './fake-product.service';
import { CreateFakeProductSchema, FakeProduct } from './schema/createProduct';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FakeProduct.name, schema: CreateFakeProductSchema },
    ]),
  ],
  providers: [FakeProductService],
  controllers: [FakeProductController],
  exports: [FakeProductService],
})
export class FakeProductModule {}
