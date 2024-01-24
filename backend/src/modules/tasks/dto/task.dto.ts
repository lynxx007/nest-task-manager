import { PartialType } from '@nestjs/mapped-types';
import { IsDateString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @MinLength(1, { message: 'Title must be at least 1 characters' })
  title: string;

  @IsDateString()
  to: Date;

  @IsDateString()
  from: Date;

  members?: string[];
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
