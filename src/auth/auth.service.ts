import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Auth, authDocument } from './schema/auth.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcryptjs';
import { UniqueConstraintsError } from 'src/common/classes/mongodb-errors.class';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private readonly authModel: Model<authDocument>,
  ) {}
  hashPassword(password: string): string {
    return bcrypt.hash(password, 10);
  }
  async signInUser(createUserDto: CreateUserDto): Promise<Auth> {
    try {
      const res = await this.authModel.create(createUserDto);
      return res;
    } catch (e) {
      if (e.code === 11000) {
        throw new UniqueConstraintsError(e.message);
      }
      throw new NotFoundException('Not Found');
    }
  }
}
