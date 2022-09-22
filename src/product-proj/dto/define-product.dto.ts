import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class DefineProductDto {
  @ApiProperty({
    required: true,
    example: 'sdfs',
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
  describe: string;
}
