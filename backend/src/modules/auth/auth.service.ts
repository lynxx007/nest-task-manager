import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import type { UserDocument } from '../user/schema/user.schema';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Types } from 'mongoose';
import { TaskDocument } from '../tasks/schema/task.schema';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(
    email: string,
    password: string,
    username: string,
  ): Promise<UserDocument> {
    const user = await this.userService.findOne(email);
    if (user) {
      throw new NotFoundException('User already exists');
    }
    return await this.userService.create({ email, password, username });
  }

  async signIn(
    email: string,
    password: string,
  ): Promise<{
    message: string;
    accessToken: string;
    user: {
      _id: Types.ObjectId;
      username: string;
      email: string;
      avatar?: string;
      teams?: UserDocument[];
      tasks?: TaskDocument[];
      currentPosition?: string;
    };
  }> {
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new HttpException('Invalid credentials', 401);
    }
    const isMatch = await this.userService.comparePassword(
      user.password,
      password,
    );
    if (!isMatch) {
      throw new HttpException('Email or password incorrect', 401);
    }
    return {
      message: 'Logged in successfully',
      accessToken: await this.jwtService.signAsync({
        id: user._id,
        roles: user.roles,
      }),
      user: user,
    };
  }
}
