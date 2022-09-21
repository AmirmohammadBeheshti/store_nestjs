import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from './product.schema';

export type reserveSchema = Reserve & Document;

@Schema({ collection: 'reserve' })
export class Reserve {
  @Prop()
  product: Product;
  @Prop({ default: new Types.ObjectId('632b51b154a4784de58e0c7c') })
  user_id: Types.ObjectId;
}

export const ReserveSchema = SchemaFactory.createForClass(Reserve);
// AuthSchema.index({ type: 1 }, { unique: true });
