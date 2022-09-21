import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class loginUserDto {
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
