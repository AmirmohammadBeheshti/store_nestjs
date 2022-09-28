import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class CreateFakeProduct {
  @ApiProperty({
    required: true,
    example: 'Title',
  })
  @IsString()
  name: string;
  @ApiProperty({
    required: true,
    example: 'Describe',
  })
  @IsString()
  describe: string;
}
