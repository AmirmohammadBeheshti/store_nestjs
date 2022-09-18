import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { Document } from 'mongoose';

export type authDocument = Auth & Document;

@Schema({ autoIndex: true })
export class Auth {
  @Prop({ required: true, unique: true, index: true })
  email: string;
  @Prop()
  //   @Exclude()
  password: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
AuthSchema.index({ type: 1 }, { unique: true });
