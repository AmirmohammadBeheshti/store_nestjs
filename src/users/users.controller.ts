import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { serializeUser } from './users.serialize';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('auth')
export class usersController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-in')
  // @UseInterceptors(ClassSerializerInterceptor)
  async signInUser(@Body() createUserDto: CreateUserDto) {
    const value = await this.userService.signInUser(createUserDto);
    return new serializeUser(value);
  }
}
