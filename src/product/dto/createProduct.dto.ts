import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDefined,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { productQuality } from '../enum';

export class CreateProductDto {
  @ApiProperty({
    required: true,
    example: 'product',
  })
  @IsString()
  @IsNotEmpty()
  productName: string;
  @ApiProperty({
    required: true,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  count: number;
  @ApiProperty({
    required: false,
    example: 'Describe About that',
  })
  @IsString()
  @IsOptional()
  describe: string;
  @ApiProperty({
    required: false,
    example: ['one', 'two'],
  })
  @IsArray()
  feature: string[];
  @ApiProperty({
    required: false,
    enum: productQuality,
  })
  @IsEnum(productQuality)
  quality: productQuality;
  @ApiProperty({
    required: true,
    example: 0,
  })
  @IsNumber()
  price: number;
}
