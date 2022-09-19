import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema } from 'src/auth/schema/auth.schema';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
    MongooseModule.forFeatureAsync([
      {
        name: Auth.name,
        useFactory: () => {
          const schema = AuthSchema;
          schema.plugin(require('mongoose-unique-validator'), {
            message: 'Email Address is Used now',
          }); // or you can integrate it without the options   schema.plugin(require('mongoose-unique-validator')
          return AuthSchema;
        },
      },
    ]),

    // MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
