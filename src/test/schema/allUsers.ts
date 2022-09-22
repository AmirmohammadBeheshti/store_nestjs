import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AllUserDoc = AllUser & Document;

@Schema({
  collection: 'allUser',
})
export class AllUser {
  @Prop({ unique: true })
  _id: number;
  @Prop()
  email: string;
}

export const AllUserSchema = SchemaFactory.createForClass(AllUser);
// AuthSchema.index({ type: 1 }, { unique: true });
