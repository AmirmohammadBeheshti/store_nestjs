import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { balanceStatus } from 'src/admin/enum';
import { BillDto } from 'src/admin/schema/balance.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async createUser(createUserDto: CreateUserDto) {
    try {
      const res = await this.usersRepository.create(createUserDto);
      return res;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
  async findOne(username: string): Promise<any> {
    try {
      const res = await this.usersRepository.findOne({ username });
      return res;
    } catch (e) {
      throw new NotFoundException('Not Found User');
    }
  }

  async updateOne(
    find: Record<string, string>,
    updatedValue: any,
  ): Promise<CreateUserDto> {
    return this.usersRepository.updateOne(find, updatedValue);
  }
  async bill(id: string, body: BillDto) {
    const res = await this.usersRepository.findById(id);
    if (!res) throw new NotFoundException('User Not Found');
    const userBalance = res.balance;
    if (body.balanceValue > 0) {
      if (userBalance <= body.balanceValue) {
        throw new BadRequestException(
          'The balance amount is less than your requested amount ',
        );
      }
    } else {
      throw new BadRequestException('Cant Bill Zero');
    }
    const calculateBalance =
      body.status === balanceStatus.INCREASE
        ? res.balance + body.balanceValue
        : res.balance - body.balanceValue;
    await this.usersRepository.findByIdAndUpdate(id, {
      balance: calculateBalance,
    });
    return { balance: calculateBalance };
  }
  async getAllUsers() {
    try {
      const res = await this.usersRepository.find(null);
      console.log(res);
      return res;
    } catch (e) {
      throw new BadRequestException('Dont Have Any Data');
    }
  }
  async findById(id: string) {
    try {
      const res = await this.usersRepository.findById(id);
      return res;
    } catch (e) {
      throw new HttpException('Not Found User', 404);
    }
  }
}
