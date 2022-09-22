import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersService } from './orders.service';
import { Orders, ordersSchema } from './schema/order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Orders.name, schema: ordersSchema }]),
  ],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}