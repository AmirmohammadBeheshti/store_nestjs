import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}
  @Post('sign-in')
  //   @UseInterceptors(ClassSerializerInterceptor)
  signInUser(@Body() createUserDto: CreateUserDto) {
    return this.auth.signInUser(createUserDto);
  }
}
