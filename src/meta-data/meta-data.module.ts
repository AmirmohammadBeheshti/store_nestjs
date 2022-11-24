import { Module } from '@nestjs/common';
import { MetaDataController } from './meta-data.controller';
import { MetaDataService } from './meta-data.service';

@Module({
  controllers: [MetaDataController],
  providers: [MetaDataService],
  exports: [MetaDataService],
})
export class MetaDataModule {}
