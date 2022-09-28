import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFakeProduct } from './dto/create-fake-product.dto';
import { createFakeDocument, FakeProduct } from './schema/createProduct';

@Injectable()
export class FakeProductService {
  constructor(
    @InjectModel(FakeProduct.name)
    private readonly fakeProduct: Model<createFakeDocument>,
  ) {}
  async createProduct(createProduct: CreateFakeProduct) {
    try {
      const res = await this.fakeProduct.create(createProduct);
      return res;
    } catch (e) {
      throw new BadRequestException('Bad Request');
    }
  }
}
