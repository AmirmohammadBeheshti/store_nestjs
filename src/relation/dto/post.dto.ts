import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Address, AddressSchema } from '../schema/address.schema';
import { AddressDto } from './addressDto';

export class PostDto {
  @ApiProperty({
    required: true,
    example: 'sdffsfs',
  })
  @IsString()
  @IsNotEmpty()
  title: string;
  @ApiProperty({
    required: true,
    example: 'sdffsfs',
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    required: true,
    example: [],
  })
  @IsString({ each: true })
  categories: string[];
}
