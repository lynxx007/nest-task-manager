import { OmitType } from '@nestjs/mapped-types';
import { IsEmail, Matches, MinLength } from 'class-validator';
export class CreateUserDto {
  @MinLength(4, { message: 'Username must be at least 4 characters' })
  username: string;
  @IsEmail()
  email: string;
  @MinLength(4, { message: 'Password must be at least 4 characters' })
  @Matches(/^(.*[0-9].*){2,}$/, {
    message: 'Password must contain at least 2 numbers',
  })
  password: string;
}

export class SignInDto extends OmitType(CreateUserDto, ['username'] as const) {}
