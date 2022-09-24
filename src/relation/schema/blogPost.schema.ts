import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { UserRelation } from './relation.schema';
import { Category } from './category.schema';

export type postDocument = Post & Document;
@Schema({ toJSON: { virtuals: true } })
export class Post {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: UserRelation.name })
  author: UserRelation;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Category.name }],
  })
  categories: Category;

  AuthorsDetails: UserRelation;
}
const PostSchema = SchemaFactory.createForClass(Post);

PostSchema.virtual('fullName').get(function (this: postDocument): string {
  return `${this.content} + 'This is a Test Text`;
});
PostSchema.virtual('setFull').set(function (this: postDocument) {
  this.set({ content: 'Amir' });
});
export { PostSchema };
