import {
  BadRequestException,
  ConflictException,
  Controller,
  ForbiddenException,
  Get,
  HttpCode,
  HttpException,
  UseFilters,
} from '@nestjs/common';
import { ForBiddenCustomExceptionFilter } from 'src/common/filter/forbidden.filter';

@Controller('users')
export class UsersController {
  @Get()
  @UseFilters(new ForBiddenCustomExceptionFilter())
  getOne() {
    type students = {
      firstName: string;
      lastName: string;
    };
    const firstConst: Record<string, students> = {
      '21-22-23': { firstName: 'David', lastName: 'Miller' },
      '24-25-26': { firstName: 'John', lastName: 'Smith' },
      '27-28-29': { firstName: 'Joe', lastName: 'Peterson' },
    };
    throw new BadRequestException('sdfs');
  }
}
