import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    required: true,
    example: 'a@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty({
    required: true,
    example: 'amirmohammad',
  })
  @IsNotEmpty()
  username: string;
  @ApiProperty({
    required: true,
    example: 'beheshti',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
