import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EntityRepository } from 'database/entity.repository';
import { Model } from 'mongoose';
import { Product, productDocument } from './schema/product.schema';
import { Reserve, reserveSchema } from './schema/reserve.schema';

@Injectable()
export class ProductRepository extends EntityRepository<productDocument> {
  constructor(
    @InjectModel(Product.name) private productModel: Model<productDocument>,
    @InjectModel(Reserve.name) private reserveModel: Model<reserveSchema>,
  ) {
    super(productModel);
  }
  async findByIdAndRemove(id: string) {
    return await this.productModel.findByIdAndRemove(id);
  }
  async reserveProduct(saveData: any) {
    try {
      const res = await this.reserveModel.create(saveData);
      return res;
    } catch (e) {
      console.log(e);
      throw new BadRequestException('dd');
    }
  }
}
