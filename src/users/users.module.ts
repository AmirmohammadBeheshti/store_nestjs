import { Module } from '@nestjs/common';
import { usersController } from './users.controller';
import { UserService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { User, UserSchema } from './schema/user.schema';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;
          schema.plugin(require('mongoose-unique-validator'), {
            message: 'Email Address is Used now',
          }); // or you can integrate it without the options   schema.plugin(require('mongoose-unique-validator')
          return UserSchema;
        },
      },
    ]),

    // MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
  ],
  controllers: [usersController],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
