import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RelationController } from './relation.controller';
import { RelationService } from './relation.service';
import { PostSchema, Post } from './schema/blogPost.schema';
import { Category, CategorySchema } from './schema/category.schema';
import { UserRelation, UserRelationSchema } from './schema/relation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserRelation.name, schema: UserRelationSchema },
      { name: Post.name, schema: PostSchema },
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [RelationController],
  providers: [RelationService],
})
export class RelationModule {}
