import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AllUser, AllUserSchema } from './schema/allUsers';
import { Blog, BlogSchema } from './schema/blog';
import { TestController } from './test.controller';
import { TestService } from './test.servie';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AllUser.name, schema: AllUserSchema },
      { name: Blog.name, schema: BlogSchema },
    ]),
  ],
  providers: [TestService],
  controllers: [TestController],
})
export class TestModule {}
