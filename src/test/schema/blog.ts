import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AllUser } from './allUsers';

export type BlogDocument = Blog & Document;

@Schema({
  collection: 'blog',
  toJSON: { virtuals: true },
})
export class Blog {
  @Prop()
  title: string;
  @Prop()
  authorId: number;
  allUser: AllUser;
}

const BlogSchema = SchemaFactory.createForClass(Blog);
BlogSchema.virtual('author', {
  ref: 'AllUser',
  localField: 'authorId',
  foreignField: '_id',
});
BlogSchema.virtual('full_name').get(function () {
  return 'amirmohammad';
});

BlogSchema.virtual('setVal').set(function (value) {
  console.log('Run the Stter', value);
});

// AuthSchema.index({ type: 1 }, { unique: true });

export { BlogSchema };
