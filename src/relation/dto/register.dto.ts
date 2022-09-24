import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Address, AddressSchema } from '../schema/address.schema';
import { AddressDto } from './addressDto';

export class RegisterRelationDto {
  @ApiProperty({
    required: true,
    example: 'a@gm.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty({
    required: true,
    example: 'sdffsfs',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({
    required: true,
    example: 'sdffsfs',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
