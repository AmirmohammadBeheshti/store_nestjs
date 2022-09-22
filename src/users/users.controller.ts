import {
  Controller,
  Post,
  UseGuards,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Req,
  GatewayTimeoutException,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { LocalStrategy } from 'src/auth/local.strategy';
import { UsersService } from './users.service';
import { Request } from 'express';
import { GetUser } from 'src/common/decorator/jwtGetInfo.decorator';
import { login } from 'src/auth/interface';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile/:id')
  @ApiBearerAuth()
  // getProfile(@Param('id', ParseIntPipe) id: string) {
  getProfile(
    @Param('id') id: string,
    @Req() request: Request,
    @GetUser() getInfo: login,
  ) {
    console.log(getInfo);
    return this.userService.findById(id);
  }

  @Get('Agg')
  agg() {
    return this.userService.agg();
  }
}
