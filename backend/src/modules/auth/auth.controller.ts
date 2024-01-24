import {
  Body,
  Controller,
  HttpCode,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, SignInDto } from '../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(201)
  @Post('register')
  signUp(@Body(new ValidationPipe()) signUpDto: CreateUserDto) {
    return this.authService.signUp(
      signUpDto.email,
      signUpDto.password,
      signUpDto.username,
    );
  }

  @HttpCode(201)
  @Post('login')
  signIn(@Body(new ValidationPipe()) signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
}
