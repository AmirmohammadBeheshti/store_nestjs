import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ProductProj,
  ProductProjDocument,
} from 'src/product-proj/schema/define_product';
import { Orders, ordersDocument } from './schema/order.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Orders.name)
    private readonly orderModel: Model<ordersDocument>,
  ) {}
  saveOrder(value) {
    return this.orderModel.create(value);
  }
  saveOrderByIds(productProj: any) {
    console.log(productProj);
    // return this
    return this.orderModel.findOne({ userId: 10 }).populate('getAuthor');
    // .populate({ path: 'productProj', populate: productProj });
  }
}
