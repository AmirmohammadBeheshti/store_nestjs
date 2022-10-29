import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateUserProjDto {
  @ApiProperty({
    required: true,
    example: 'sdfs',
  })
  @IsString()
  @IsNotEmpty()
  username: string;
  @ApiProperty({
    required: true,
    example: true,
  })
  @ValidateIf(({ bool }) => {
    return bool === 'amir';
  })
  @IsString()
  @IsEmail()
  bool: string;
  @ApiProperty({
    required: true,
    example: 'sdffsfs',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
