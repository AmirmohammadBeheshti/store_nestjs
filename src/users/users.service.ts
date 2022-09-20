import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async createUser(createUserDto: CreateUserDto) {
    try {
      const res = await this.usersRepository.create(createUserDto);
      return res;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
  async findOne(username: string): Promise<any> {
    try {
      const res = await this.usersRepository.findOne({ username });
      return res;
    } catch (e) {
      throw new NotFoundException('Not Found User');
    }
  }

  async findById(id: string) {
    try {
      const res = await this.usersRepository.findById(id);
      return res;
    } catch (e) {
      throw new HttpException('Not Found User', 404);
    }
  }
}
