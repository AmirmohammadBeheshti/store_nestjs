import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  async createUser(createUserDto: CreateUserDto) {
    try {
      const res = null;
      // await this.userModel.create(createUserDto);
      return res;
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
  async findOne(username: string): Promise<any> {
    return null;
    // return this.userModel.findOne({ username });
  }
}
