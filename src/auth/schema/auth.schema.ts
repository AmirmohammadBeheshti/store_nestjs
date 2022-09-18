import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { Document } from 'mongoose';

export type authDocument = Auth & Document;

@Schema({ collection: 'users' })
export class Auth {
  @Prop({ unique: true })
  email: string;
  @Prop()
  @Exclude()
  password: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
// AuthSchema.index({ type: 1 }, { unique: true });
