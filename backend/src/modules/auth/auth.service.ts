import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { UserDocument } from '../user/schema/user.schema';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Types } from 'mongoose';

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
    user: { _id: Types.ObjectId; username: string; email: string };
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
      throw new HttpException('Invalid credentials', 401);
    }
    return {
      message: 'Logged in successfully',
      accessToken: await this.jwtService.signAsync({
        id: user._id,
        roles: user.roles,
      }),
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    };
  }
}
