import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiNotImplementedResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ProductService } from './product.service';
@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post('definition_product')
  definitionProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.definitionProduct(createProductDto);
  }
  @Get('getProduct/:id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }
  @Put('editProductById/:id')
  editProductById(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.editProductById(id, updateProductDto);
  }
  @Delete('delete/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
  @Get('getProducts')
  @ApiQuery({ required: false, name: 'search' })
  getProduct(@Query('search') search?: string) {
    console.log(search);
    return this.productService.getAllProduct(
      search ? { productName: { $regex: search } } : null,
    );
  }
}
