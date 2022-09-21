import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { Document, Types } from 'mongoose';
import { Product } from 'src/product/schema/product.schema';
import { Reserve } from 'src/product/schema/reserve.schema';

export type userDocument = User & Document;

@Schema({
  collection: 'users',
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class User {
  @Prop()
  username: string;
  @Prop({ unique: true })
  email: string;
  @Prop()
  password: string;
  @Prop({ default: 0 })
  balance: number;

  @Prop({ default: new Types.ObjectId('632b51b154a4784de58e0c7c') })
  user_get_id: string;

  Product: Reserve;
}

export const UserSchema = SchemaFactory.createForClass(User);
// AuthSchema.index({ type: 1 }, { unique: true });

UserSchema.virtual('Product', {
  justOne: true,
  ref: 'reserve',
  localField: 'user_get_id',
  foreignField: 'product',
});
