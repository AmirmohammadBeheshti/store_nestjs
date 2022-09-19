import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { catchError } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from './dto/createUser.dto';
import { loginUserDto } from './dto/login.dto';
import { User, userDocument } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<userDocument>,
    private readonly authService: AuthService,
  ) {}
  async createUser(createUserDto: CreateUserDto) {
    try {
      const res = await this.userModel.create(createUserDto);
      return res;
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
  async findOne(loginUserDto: loginUserDto): Promise<any> {
    return this.authService.login(loginUserDto);
  }
}
