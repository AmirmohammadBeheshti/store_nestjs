import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ProductProjDocument = ProductProj & Document;

@Schema({
  collection: 'productProj',
})
export class ProductProj {
  @Prop()
  name: string;
  @Prop()
  describe: string;
  @Prop({ default: [] })
  orders: Types.ObjectId[];
}

export const ProductProjSchema = SchemaFactory.createForClass(ProductProj);
// AuthSchema.index({ type: 1 }, { unique: true });
