import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from 'src/auth/dto';
import { CreateUserProjDto } from './dto/create_user_proj.dto';
import { UserProject, userProjectDocument } from './schema/userProj.schema';

@Injectable()
export class UserProjService {
  constructor(
    @InjectModel(UserProject.name)
    private readonly userProject: Model<userProjectDocument>,
  ) {}

  async findAll() {
    try {
      const res = await this.userProject.find();
      return res;
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async updateOrderId(orderId: string, userId: string) {
    try {
      const res = await this.userProject.updateOne(
        { id: userId },
        { $push: { orderIds: new Types.ObjectId(orderId) } },
      );
      return res;
    } catch (e) {
      throw new BadRequestException();
    }
  }
  async saveData(createUserDto: CreateUserProjDto) {
    try {
      const res = await this.userProject.create(createUserDto);
      return res;
    } catch (e) {
      console.log(e);
      throw new BadRequestException('Bad Request');
    }
  }
}
