import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { Document, Types } from 'mongoose';
import { ProductProj } from 'src/product-proj/schema/define_product';
import { Product } from 'src/product/schema/product.schema';
import { Reserve } from 'src/product/schema/reserve.schema';

export type ordersDocument = Orders & Document;

@Schema({ collection: 'orders' })
export class Orders {
  // immutable it means cant change at all
  @Prop()
  userId: string;
  @Prop()
  products: ProductProj[];
}

export const ordersSchema = SchemaFactory.createForClass(Orders);
