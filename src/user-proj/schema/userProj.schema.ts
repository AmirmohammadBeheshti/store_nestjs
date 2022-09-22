import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { Document, Types } from 'mongoose';
import { Product } from 'src/product/schema/product.schema';
import { Reserve } from 'src/product/schema/reserve.schema';

export type userProjectDocument = UserProject & Document;

@Schema({ collection: 'userProj' })
export class UserProject {
  // immutable it means cant change at all
  @Prop()
  username: string;
  @Prop()
  name: string;
  @Prop()
  orderIds: Types.ObjectId[];
}

export const userProjectSchema = SchemaFactory.createForClass(UserProject);
