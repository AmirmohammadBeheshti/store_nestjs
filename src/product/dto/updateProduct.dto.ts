import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './createProduct.dto';

// duplicate the create DTO and rules but all of them is optional
export class UpdateProductDto extends PartialType(CreateProductDto) {}
