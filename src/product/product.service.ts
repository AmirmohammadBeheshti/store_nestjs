import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { TransformationType } from 'class-transformer';
import { Types } from 'mongoose';
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}
  async definitionProduct(createProductDto: CreateProductDto) {
    try {
      const res = await this.productRepository.create(createProductDto);
      return res;
    } catch (e) {
      console.log(e);
      throw new BadRequestException('Cant Save');
    }
  }
  async reserveProduct(id: string) {
    const res = await this.productRepository.findById(id);
    const saveProduct = await this.productRepository.reserveProduct({
      product: res,
      user_id: new Types.ObjectId(id),
    });
    return saveProduct;
  }
  async editProductById(id: string, updateProductDto: UpdateProductDto) {
    try {
      const res = await this.productRepository.findByIdAndUpdate(
        id,
        updateProductDto,
      );
      console.log(res);
      if (!res) {
        throw new NotFoundException('Product IS Not Valid');
      }
      return updateProductDto;
    } catch (e) {
      throw new BadRequestException('Cant Edit the Product');
    }
  }
  async deleteProduct(id: string) {
    try {
      const res = await this.productRepository.findByIdAndRemove(id);
      return res;
    } catch (e) {
      throw new NotFoundException('Product Is Not Valid');
    }
  }
  async getAllProduct(
    findParams: Record<string, number | string | object> | null = null,
  ) {
    try {
      console.log(findParams);
      const res = await this.productRepository.find(findParams);
      if (!res.length) throw new NotFoundException('Cant Find This Product');
      console.log(res);
      return res;
    } catch (e) {
      throw new BadRequestException('Cant Find Product');
    }
  }
  async getProductById(id: string) {
    try {
      const res = await this.productRepository.findById(id);
      console.log(res);
      if (!res) {
        throw new NotFoundException('Product Not Exist');
      }
      return res;
    } catch (e) {
      console.log(e);
      throw new BadRequestException('Please Enter Valid ID');
    }
  }
}
