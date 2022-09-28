import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductProjModule } from 'src/product-proj/product-proj.module';
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
