import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class SaveDto {
  @ApiProperty({
    required: true,
    example: [],
  })
  @IsOptional()
  //   @IsString({ each: true })
  productProj: string[] | number | string;
  @ApiProperty({
    required: true,
    example: 1,
  })
  @IsOptional()
  authorId: number;
}
