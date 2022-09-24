import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Exclude, Transform, Type } from 'class-transformer';
import { Address, AddressSchema } from './address.schema';

export type UserRelationDocument = UserRelation & Document;

@Schema()
export class UserRelation {
  @Transform(({ value }) => value.toString())
  _id: Types.ObjectId;
  @Prop({ unique: true })
  email: string;

  @Prop()
  name: string;

  @Prop()
  @Exclude()
  password: string;

  @Prop({ type: AddressSchema })
  @Type(() => Address)
  address: Address;
}

export const UserRelationSchema = SchemaFactory.createForClass(UserRelation);
