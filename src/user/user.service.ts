import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './models/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user') private readonly userRepository: Model<User>,
  ) {}

  async all(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(data): Promise<User> {
    const entity = new this.userRepository(data);
    entity.avatar = data.avatar; // Save the filename of the uploaded avatar
    return await entity.save();
  }

  async update(id: string, updateDto): Promise<User> {
    updateDto.avatar = updateDto.avatar; // Save the filename of the uploaded avatar
    return await this.userRepository.findByIdAndUpdate(id, updateDto, { new: true });
  }
  async getById(id: string): Promise<User> {
    return this.userRepository.findById(id);
  }
  async findOne(condition): Promise<User> {
    return await this.userRepository.findOne(condition);
  }

  
}
