import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { Document, Types } from 'mongoose';
import { Product } from 'src/product/schema/product.schema';
import { Reserve } from 'src/product/schema/reserve.schema';

export type userDocument = User & Document;

@Schema({ collection: 'users' })
export class User extends Document {
  // immutable it means cant change at all
  @Prop()
  username: string;
  @Prop({ unique: true })
  email: string;
  @Prop()
  password: Types.Buffer;
  @Prop({ default: 0 })
  balance: number;

  @Prop({
    default: 0,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is mot even`,
    },
  })
  validateNumber: number;

  get getName() {
    return 'a';
  }
  // sayHi: Function;

  @Prop({ default: new Types.ObjectId('632b51b154a4784de58e0c7c') })
  user_get_id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
