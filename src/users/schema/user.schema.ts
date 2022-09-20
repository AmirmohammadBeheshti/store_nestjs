import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { Document } from 'mongoose';

export type userDocument = User & Document;

@Schema({ collection: 'users' })
export class User {
  @Prop()
  username: string;
  @Prop({ unique: true })
  email: string;
  @Prop()
  password: string;
  @Prop({ default: 0 })
  balance: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
// AuthSchema.index({ type: 1 }, { unique: true });
