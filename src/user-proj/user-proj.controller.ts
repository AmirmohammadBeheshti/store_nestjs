import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/auth/dto';
import { CreateUserProjDto } from './dto/create_user_proj.dto';
import { UserProjService } from './user-proj.service';

@ApiTags('Project With Relation')
@Controller('user-proj')
export class UserProjController {
  constructor(private readonly userProjService: UserProjService) {}
  // @Post('define_user')
  // defineUser(@Body() createUserDto: CreateUserProjDto) {
  //   return this.userProjService.saveData(createUserDto);
  // }
  // @Get('get_user/:id')
  // getUser(@Param('id') id: string) {
  //   return this.userProjService.getUserById(id);
  // }
  @Post('newUser')
  newUser(@Body() createUserDto: CreateUserProjDto) {
    return this.userProjService.saveData(createUserDto);
  }
  @Get('GetAllUser')
  getAllUser() {
    return this.userProjService.findAll();
  }
}
