import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { FakeProduct } from 'src/fake-product/schema/createProduct';

export type FakeReserveDocument = FakeReserve & Document;

@Schema({ collection: 'fakeReserve' })
export class FakeReserve {
  @Prop()
  name: string;
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: FakeProduct.name }],
  })
  products: FakeProduct;
}

export const FakeReserveSchema = SchemaFactory.createForClass(FakeReserve);
