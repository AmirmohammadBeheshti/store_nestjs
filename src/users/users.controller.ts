import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { LocalStrategy } from 'src/auth/local.strategy';
import { CreateUserDto } from './dto/createUser.dto';
import { loginUserDto } from './dto/login.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }
  @UseGuards(LocalStrategy)
  @Post('login')
  async login(@Body() loginUserDto: loginUserDto) {
    return this.authService.findOne(loginUserDto);
  }
}
