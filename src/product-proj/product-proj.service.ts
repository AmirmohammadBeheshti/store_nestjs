import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { DefineProductDto } from './dto/define-product.dto';
import { ProductProj, ProductProjDocument } from './schema/define_product';
import { BSONTypeError } from 'bson';
import { TransformationType } from 'class-transformer';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class productProjService {
  constructor(
    @InjectModel(ProductProj.name)
    private readonly productProject: Model<ProductProjDocument>,
  ) {}

  async findAllWithPaginate(pagination: PaginationDto) {
    const { take, page } = pagination;
    const res = await this.productProject
      .find()
      .skip(take)
      .limit(page)
      .sort({ name: 'asc' }) // asc , desc => we can use the 1 OR -1 instead of that
      .exec();
    if (!res) {
      throw new BadRequestException('Its Not Valid');
    }
    return res;
  }
  async findAll() {
    try {
      const res = await this.productProject.find();
      return res;
    } catch (e) {
      throw new BadRequestException();
    }
  }
  async updateTheProduct(ids: string[], orderId: string) {
    try {
      const convertId = ids.map((id) => new Types.ObjectId(id));
      const res = await this.productProject.updateMany(
        { _id: convertId },
        { $push: { orders: new Types.ObjectId(orderId) } },
      );
      return res;
    } catch (e) {
      console.log(e);
      throw new BadRequestException();
    }
  }

  async findById(id) {
    try {
      const res = await this.productProject.findById(id);
      return res;
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async saveData(defineProduct: DefineProductDto) {
    try {
      const res = await this.productProject.create(defineProduct);
      return res;
    } catch (e) {
      console.log(e);
      throw new BadRequestException('Bad Request');
    }
  }
  async findByIds(ids: string[]) {
    try {
      console.log(ids);

      const res = await this.productProject.find({
        _id: { $in: ids.map((id) => new Types.ObjectId(id)) },
      });
      return res;
    } catch (e) {
      console.log(e);
      if (e instanceof BSONTypeError) {
        throw new BadRequestException('ID is not Correct');
      }
    }
  }
}
