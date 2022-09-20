import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from 'src/product/product.service';
import { UsersService } from 'src/users/users.service';
import { BillDto } from './schema/balance.dto';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(
    private readonly userService: UsersService,
    private readonly productService: ProductService,
  ) {}
  @Get('all_users')
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Get('all_product')
  getAllProduct() {
    return this.productService.getAllProduct();
  }
  @Put('bill_users/:id')
  billUsers(@Param('id') id: string, @Body() billDto: BillDto) {
    return this.userService.bill(id, billDto);
  }
}
