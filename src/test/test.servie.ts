import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schema/user.schema';
import { AllUser, AllUserDoc } from './schema/allUsers';
import { Blog, BlogDocument } from './schema/blog';

@Injectable()
export class TestService {
  constructor(
    @InjectModel(AllUser.name) private readonly allUser: Model<AllUserDoc>,
    @InjectModel(Blog.name) private readonly blog: Model<BlogDocument>,
  ) {}
  async postUser() {
    await this.blog.create({
      title: 'Introducstion to Mongoose',
      authorId: 2,
    });
    await this.allUser.create({ _id: 2, email: 'test@gmasdfil.com' });
    return 'a';
  }

  async finded() {
    const res = await this.blog.findOne().populate('author');
    // console.log(res.$assertPopulated);
    console.log(res.get('full_name'));
    return res.get('author');
  }
}
