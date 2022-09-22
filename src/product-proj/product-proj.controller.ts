import {
  Body,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { CreateUserDto } from 'src/auth/dto';
import { login } from 'src/auth/interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetUser } from 'src/common/decorator/jwtGetInfo.decorator';
import { OrdersService } from 'src/orders/orders.service';
import { UserProjService } from 'src/user-proj/user-proj.service';
import { DefineProductDto } from './dto/define-product.dto';
import { productProjService } from './product-proj.service';

@ApiTags('Project With Relation')
@Controller('user-proj')
export class productProjController {
  constructor(
    private readonly productProj: productProjService,
    private readonly ordersService: OrdersService,
    private readonly userProjService: UserProjService,
  ) {}
  // @Post('define_user')
  // defineUser(@Body() createUserDto: CreateUserProjDto) {
  //   return this.userProjService.saveData(createUserDto);
  // }
  // @Get('get_user/:id')
  // getUser(@Param('id') id: string) {
  //   return this.userProjService.getUserById(id);
  // }
  @Post('newProduct')
  newUser(@Body() createUserDto: DefineProductDto) {
    return this.productProj.saveData(createUserDto);
  }
  @Get('GetAllProduct')
  getAllUser() {
    return this.productProj.findAll();
  }
  @Get('findByIds')
  findByIds(
    @Query('ids', new ParseArrayPipe({ items: String, separator: ',' }))
    ids: string[],
  ) {
    return this.productProj.findByIds(ids);
  }

  //   @UseGuards(JwtAuthGuard)
  @Post('Reserve/:id')
  //   @ApiBearerAuth()
  async reserve(
    @Param('id') id: string,
    @Query('ids', new ParseArrayPipe({ items: String, separator: ',' }))
    ids: string[],
    @GetUser() getInfo: login,
  ) {
    console.log(id);
    const getProducts = await this.productProj.findByIds(ids);
    const orders = await this.ordersService.saveOrder({
      userId: id,
      products: getProducts,
    });
    const updateOrder = await this.productProj.updateTheProduct(ids, orders.id);
    const updateUser = await this.userProjService.updateOrderId(orders.id, id);
    return updateOrder;
  }
}
