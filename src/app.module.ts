import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({}),
    MongooseModule.forRoot('mongodb://localhost:27017/store'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
