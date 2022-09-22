import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
}
