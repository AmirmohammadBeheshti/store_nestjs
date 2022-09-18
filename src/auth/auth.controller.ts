import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { Transform } from 'class-transformer';
import { serializeUser } from './auth.serialize';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}
  @Transform(({ value }) => value.email)
  role: AuthService;
  @Post('sign-in')
  // @UseInterceptors(ClassSerializerInterceptor)
  async signInUser(@Body() createUserDto: CreateUserDto) {
    const value = await this.auth.signInUser(createUserDto);
    return new serializeUser(value);
  }
}
