import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User, userDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { UniqueConstraintsError } from 'src/common/classes/mongodb-errors.class';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly authModel: Model<userDocument>,
  ) {}
  hashPassword(password: string): string {
    return bcrypt.hash(password, 10);
  }
  async signInUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      const hashPassword = await this.hashPassword(createUserDto.password);
      const res = await this.authModel.create({
        ...createUserDto,
        password: hashPassword,
      });
      return res;
    } catch (e) {
      console.log(e);
      if (e.code === 11000) {
        throw new UniqueConstraintsError(e.message);
      }
      throw new NotFoundException(e.message);
    }
  }
  async getUser(query: object): Promise<User> {
    return this.authModel.findOne(query);
  }
}
