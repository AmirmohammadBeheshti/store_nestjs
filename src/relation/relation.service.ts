import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDto } from './dto/post.dto';
import { RegisterRelationDto } from './dto/register.dto';
import { Post, PostDocument } from './schema/blogPost.schema';
import { UserRelation, UserRelationDocument } from './schema/relation.schema';

@Injectable()
export class RelationService {
  constructor(
    @InjectModel(UserRelation.name)
    private readonly userRelation: Model<UserRelationDocument>,
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,
  ) {}
  async register(userRelation: RegisterRelationDto) {
    const value = await this.userRelation.create(userRelation);
    return value;
  }
  async createPost(postDto: PostDto, id: string) {
    // const createdPost = new this.postModel({ ...postDto, author: id });
    // console.log(createdPost);
    // await createdPost.populate('authorDetails').exec
    // return await createdPost.save();
    const createdPost = new this.postModel({
      ...postDto,
      author: id,
    });
    await createdPost.populate('categories');
    return createdPost.save();
  }

  async findPostByAuthorDetails() {
    return await this.postModel.find().populate('authorDetails');
  }
}
