import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { CreateUserDto, loginUserDto } from './dto';

import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginUserDto: loginUserDto) {
    return this.authService.login({
      username: loginUserDto.username,
      role: 'user',
    });
  }
}
