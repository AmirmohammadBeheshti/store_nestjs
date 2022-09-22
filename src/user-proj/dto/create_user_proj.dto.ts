import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

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
    example: 'sdffsfs',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
