import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Address, AddressSchema } from '../schema/address.schema';

export class AddressDto {
  @ApiProperty({
    required: true,
    example: 'sdffsfs',
  })
  @IsString()
  @IsNotEmpty()
  city: string;
  @ApiProperty({
    required: true,
    example: 'sdffsfs',
  })
  @IsString()
  @IsNotEmpty()
  street: string;
}
