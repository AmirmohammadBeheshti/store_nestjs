import { Controller, Post, UseGuards, Body, Get, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
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
  // @UseGuards(LocalStrategy)
  @Post('login')
  async login(@Body() loginUserDto: loginUserDto) {
    return this.userService.findOne(loginUserDto.username);
  }
  // @UseGuards(JwtAuthGuard)
  @Get('profile/:id')
  getProfile(@Param('id') id: string) {
    return this.userService.findById(id);
  }
}
