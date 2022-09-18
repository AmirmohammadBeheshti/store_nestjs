import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    required: true,
    example: 'Start date of the pricing rule',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty({
    required: true,
    example: 'beheshti',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
