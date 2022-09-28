import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { Document, Types } from 'mongoose';
import { ProductProj } from 'src/product-proj/schema/define_product';
import { Product } from 'src/product/schema/product.schema';
import { Reserve } from 'src/product/schema/reserve.schema';
import { AllUser } from 'src/test/schema/allUsers';

export type ordersDocument = Orders & Document;

@Schema({ collection: 'orders', toJSON: { virtuals: true } })
export class Orders {
  // immutable it means cant change at all
  @Prop()
  userId: string;
  @Prop()
  productProj: number;

  @Prop()
  authorId: number;

  allUser: AllUser;

  pro: ProductProj;
}

const ordersSchema = SchemaFactory.createForClass(Orders);

// ordersSchema.virtual('some', {
//   ref: 'ProductProj',
//   localField: 'productProj',
//   foreignField: '_id',
// });

ordersSchema.virtual('getAuthor', {
  ref: 'AllUser',
  localField: 'authorId',
  foreignField: '_id',
});

export { ordersSchema };
