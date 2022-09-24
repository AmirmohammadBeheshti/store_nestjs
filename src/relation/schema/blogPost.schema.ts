import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { UserRelation } from './relation.schema';
import { Category } from './category.schema';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: UserRelation.name })
  @Type(() => UserRelation)
  author: UserRelation;

  @Prop({
    type: [{ type: [mongoose.Schema.Types.ObjectId], ref: Category.name }],
  })
  @Type(() => Category)
  categories: Category[];

  AuthorsDetails: UserRelation;

  category: Category;
}
const PostSchema = SchemaFactory.createForClass(Post);

// PostSchema.virtual('authorDetails', {
//   ref: 'UserRelation',
//   localField: 'author',
//   foreignField: '_id',
// });
// PostSchema.virtual('catagoriesDetails', {
//   ref: 'Category',
//   localField: 'categories',
//   foreignField: '_id',
// });
export { PostSchema };
