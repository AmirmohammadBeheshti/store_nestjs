import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class CreateFakeReserve {
  @ApiProperty({
    required: true,
    example: [],
  })
  @IsString({ each: true })
  products: string;
}
