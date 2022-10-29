import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserProject, userProjectSchema } from './schema/userProj.schema';
import { UserProjController } from './user-proj.controller';
import { UserProjService } from './user-proj.service';

@Module({
  providers: [
    UserProjService,
    {
      provide: 'useValueClaas',
      useValue: 55454,
    },
  ],
  imports: [
    MongooseModule.forFeature([
      { name: UserProject.name, schema: userProjectSchema },
    ]),
  ],

  controllers: [UserProjController],
  exports: [UserProjService],
})
export class UserProjModule {}
