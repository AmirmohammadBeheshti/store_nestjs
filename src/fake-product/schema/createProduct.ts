import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type createFakeDocument = FakeProduct & Document;

@Schema()
export class FakeProduct {
  @Prop()
  name: string;
  @Prop()
  describe: string;
}

export const CreateFakeProductSchema =
  SchemaFactory.createForClass(FakeProduct);
