import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from 'src/orders/orders.module';
import { UserProjModule } from 'src/user-proj/user-proj.module';
import { productProjController } from './product-proj.controller';
import { productProjService } from './product-proj.service';
import { ProductProj, ProductProjSchema } from './schema/define_product';

@Module({
  imports: [
    OrdersModule,
    UserProjModule,
    MongooseModule.forFeature([
      { name: ProductProj.name, schema: ProductProjSchema },
    ]),
  ],
  controllers: [productProjController],
  providers: [productProjService],
})
export class ProductProjModule {}
