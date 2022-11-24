import { Controller, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MetaDataGuard } from 'src/common/guard/metaDataGaurd';

@ApiTags('Meta-Data')
@Controller('meta-data')
export class MetaDataController {
  @UseGuards(MetaDataGuard)
  @SetMetadata('roles', ['admin'])
  @Post('PostMethod')
  postMethod() {
    return 'a';
  }
}
