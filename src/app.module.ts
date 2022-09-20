import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({}),
    MongooseModule.forRoot('mongodb://localhost:27017/store'),
    // ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
