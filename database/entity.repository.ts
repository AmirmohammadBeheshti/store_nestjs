import { NotFoundException } from '@nestjs/common';
import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';

export abstract class EntityRepository<T extends Document> {
  constructor(protected readonly entityModel: Model<T>) {}

  async findOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T | null> {
    return this.entityModel
      .findOne(entityFilterQuery, {
        _id: 0,
        __v: 0,
        ...projection,
      })
      .exec();
  }

  async find(entityFilterQuery: FilterQuery<T> | null): Promise<T[] | null> {
    const a: Record<number, number> = { 500: 10 };

    return this.entityModel.find(entityFilterQuery);
  }

  async create(createEntityData: unknown): Promise<T> {
    const entity = new this.entityModel(createEntityData);
    return entity.save();
  }

  // async updateOne(
  //   find: Record<string, string>,
  //   updateEntityData: UpdateQuery<unknown>,
  // ): Promise<T | null> {
  //   return this.entityModel.updateOne(find, updateEntityData);
  // }

  async updateOne(
    find: Record<string, string>,
    updatedValue: UpdateQuery<unknown>,
  ): Promise<any> {
    return await this.entityModel.updateOne(find, updatedValue);
  }

  async findById(id: string) {
    console.log(id);
    try {
      const res = await this.entityModel.findById(id);
      return res;
    } catch (e) {
      console.log(e);
      throw new NotFoundException('User Not Found');
    }
  }
  async findByIdAndUpdate(
    id: string,
    updateEntityData: UpdateQuery<unknown>,
  ): Promise<T | null> {
    return await this.entityModel.findByIdAndUpdate(id, updateEntityData);
  }

  async findOneAndUpdate(
    entityFilterQuery: FilterQuery<T>,
    updateEntityData: UpdateQuery<unknown>,
  ): Promise<T | null> {
    return this.entityModel.findOneAndUpdate(
      entityFilterQuery,
      updateEntityData,
    );
  }

  async deleteMany(entityFilterQuery: FilterQuery<T>): Promise<boolean> {
    const deleteResult = await this.entityModel.deleteMany(entityFilterQuery);
    return deleteResult.deletedCount >= 1;
  }
}
