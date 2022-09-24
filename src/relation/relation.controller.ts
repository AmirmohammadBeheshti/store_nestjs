import { Controller, Get, Body, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostDto } from './dto/post.dto';
import { RegisterRelationDto } from './dto/register.dto';
import { RelationService } from './relation.service';
import { UserRelation } from './schema/relation.schema';

@ApiTags('Relation')
@Controller('relation')
export class RelationController {
  constructor(private readonly relationService: RelationService) {}
  @Post('OneToOne')
  oneToOne(@Body() userRelation: RegisterRelationDto) {
    return this.relationService.register(userRelation);
  }
  @Post('OneToMany')
  OneToMany(@Body() postDto: PostDto, Qua) {
    return this.relationService.createPost(postDto, '632eb666b2bb576ae01ccf07');
  }
  @Get('findOne')
  findPostByAuthorDetails() {
    return this.relationService.findPostByAuthorDetails();
  }
}
