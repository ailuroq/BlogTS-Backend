import { Body, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from '../schemas/dto/create-user.dto';
import { User, UserDocument } from '../schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username: username }).exec();
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(userDto);
    return newUser.save();
  }
}
