import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { Document } from 'mongoose';

export type userDocument = User & Document;

@Schema({ collection: 'users' })
export class User extends Document {
  // immutable it means cant change at all
  @Prop({ immutable: true })
  username: string;
  @Prop({ unique: true })
  email: string;
  @Prop()
  password: string;
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
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('getName').get(function () {
  return 'a';
});

// AuthSchema.index({ type: 1 }, { unique: true });
// UserSchema.virtual('fullName').get(function () {
//   console.log('Runned');
//   return `Amr`;
// });
