import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { balanceStatus } from '../enum';

export class BillDto {
  @ApiProperty({
    required: true,
    example: 0,
  })
  @IsNumber()
  @IsNotEmpty()
  balanceValue: number;
  @ApiProperty({
    required: true,
    enum: balanceStatus,
    default: balanceStatus.INCREASE,
  })
  @IsEnum(balanceStatus)
  status: balanceStatus;
}
