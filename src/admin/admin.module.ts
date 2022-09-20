import { Module } from '@nestjs/common';
import { ProductModule } from 'src/product/product.module';
import { UsersModule } from 'src/users/users.module';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [UsersModule, ProductModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
