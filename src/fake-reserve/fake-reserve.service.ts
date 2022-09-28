import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FakeProduct } from 'src/fake-product/schema/createProduct';
import { Product } from 'src/product/schema/product.schema';
import { CreateFakeReserve } from './dto/reserve.dto';
import { FakeReserve, FakeReserveDocument } from './schema/reserve.schema';

@Injectable()
export class FakeReserveService {
  constructor(
    @InjectModel(FakeReserve.name)
    private readonly fakeReserve: Model<FakeReserveDocument>,
  ) {}
  async reserved(body: CreateFakeReserve) {
    const createdFakeReserveInstance = new this.fakeReserve({
      ...body,
      name: 'test',
    });
    await createdFakeReserveInstance.populate('products');
    const res = await createdFakeReserveInstance.save();
    return res;
  }
}
