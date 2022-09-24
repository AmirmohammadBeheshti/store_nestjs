import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TestModule } from './test/test.module';
import { ProductProjModule } from './product-proj/product-proj.module';
import { OrdersModule } from './orders/orders.module';
import { RelationModule } from './relation/relation.module';
import { UserProjModule } from './user-proj/user-proj.module';

@Module({
  imports: [
    UserProjModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({}),
    MongooseModule.forRoot('mongodb://localhost:27017/store'),
    ProductModule,
    AdminModule,
    TestModule,
    ProductProjModule,
    OrdersModule,
    RelationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
