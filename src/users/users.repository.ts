import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EntityRepository } from 'database/entity.repository';
import { Model } from 'mongoose';
import { User, userDocument } from './schema/user.schema';

@Injectable()
export class UsersRepository extends EntityRepository<userDocument> {
  constructor(@InjectModel(User.name) userModel: Model<userDocument>) {
    super(userModel);
  }
}
