import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this.userModel({
      ...createUserDto,
    });
    return await createdUser.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return await this.userModel.find();
  }

  async findOne(email: string): Promise<UserDocument | null> {
    const user = await this.userModel
      .findOne({ email: email })
      .select('+password');
    return user;
  }

  public async comparePassword(
    userPassword: string,
    passwordInput: string,
  ): Promise<boolean> {
    return await bcrypt.compare(passwordInput, userPassword);
  }
}
