import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { Document } from 'mongoose';
import { productQuality } from '../enum';

export type productDocument = Product & Document;

@Schema({
  collection: 'product',
})
export class Product {
  @Prop({ unique: true })
  productName: string;
  @Prop()
  count: number;
  @Prop({ default: null })
  describe: string;
  @Prop()
  feature: string[];
  @Prop()
  quality: productQuality;
  @Prop()
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
// AuthSchema.index({ type: 1 }, { unique: true });
