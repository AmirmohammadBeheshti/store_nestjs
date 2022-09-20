import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EntityRepository } from 'database/entity.repository';
import { Model } from 'mongoose';
import { Product, productDocument } from './schema/product.schema';

@Injectable()
export class ProductRepository extends EntityRepository<productDocument> {
  constructor(
    @InjectModel(Product.name) private productModel: Model<productDocument>,
  ) {
    super(productModel);
  }
  async findByIdAndRemove(id: string) {
    return await this.productModel.findByIdAndRemove(id);
  }
}
