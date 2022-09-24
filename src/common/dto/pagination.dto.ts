import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    required: false,
  })
  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  take: number;
  @ApiProperty({
    required: false,
  })
  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  page: number;
}
