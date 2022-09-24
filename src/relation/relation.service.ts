import { BadRequestException, Injectable, Res } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { PostDto } from './dto/post.dto';
import { RegisterRelationDto } from './dto/register.dto';
import { Post } from './schema/blogPost.schema';
import { Category } from './schema/category.schema';
import { UserRelation, UserRelationDocument } from './schema/relation.schema';

@Injectable()
export class RelationService {
  constructor(
    @InjectModel(UserRelation.name)
    private readonly userRelation: Model<UserRelationDocument>,
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>,
    @InjectConnection() private readonly connection: Connection,
  ) {}
  async register(userRelation: RegisterRelationDto) {
    const value = await this.userRelation.create(userRelation);
    return value;
  }
  async createPost(postDto: PostDto, id: string) {
    const createdPost = new this.postModel({
      ...postDto,
      author: id,
    });
    await createdPost.populate('categories');

    console.log(createdPost);
    const res = await createdPost.save();
    return res;
  }

  async findPostByAuthorDetails() {
    return await this.postModel.find().populate('authorDetails');
  }

  async deleteTransaction(categoryId: string) {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const user = await this.categoryModel.findByIdAndDelete(categoryId);
      if (!user) {
        throw new BadRequestException('Id Is not valid');
      }
      const findById = await this.postModel.findOneAndDelete({
        categories: { $in: [categoryId] },
      });
      console.log(findById);

      await session.commitTransaction();
      return 'true';
    } catch (e) {
      await session.abortTransaction();
      return false;
    } finally {
      session.endSession();
    }
  }
}
