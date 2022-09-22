import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EntityRepository } from 'database/entity.repository';
import { Model } from 'mongoose';
import { User, userDocument } from './schema/user.schema';

@Injectable()
export class UsersRepository extends EntityRepository<userDocument> {
  constructor(@InjectModel(User.name) private userModel: Model<userDocument>) {
    super(userModel);
  }
  aggregateCollection() {
    return this.userModel.aggregate([
      { $match: { name: 'Alex' } },
      // { $addFields: {} },

      {
        $group: {
          books: { $push: '$$ROOT' },
          a: { $push: '$age' },
          _id: { ages: '$age' },
        },
      },
      { $skip: 1 },
      {
        $addFields: {
          a: '$roll',
        },
      },

      { $limit: 10 },
    ]);

    // .count('name') => count is count of file and set the name used for return count
  }
}
