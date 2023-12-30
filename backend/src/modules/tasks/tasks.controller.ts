import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Request,
  UnauthorizedException,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UserRoles } from 'src/common/decorators/roles.decorator';

import { RolesGuard } from 'src/common/guards/roles.guard';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@UseGuards(RolesGuard)
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @HttpCode(200)
  @Get()
  getTasks(@Request() req, @UserRoles() roles) {
    if (!roles) {
      throw new UnauthorizedException();
    }
    return this.taskService.findByUser(req.user.id);
  }

  @Get(':id')
  getTask(@Request() req, @UserRoles() roles, @Param('id') id: string) {
    if (!roles) {
      throw new UnauthorizedException();
    }
    return this.taskService.findOne(id);
  }

  @HttpCode(201)
  @Post('create')
  postTask(
    @Request() req,
    @Body(new ValidationPipe()) body: CreateTaskDto,
    @UserRoles() roles,
  ) {
    if (!roles) {
      throw new UnauthorizedException();
    }
    return this.taskService.create(body, req.user.id);
  }
  @HttpCode(200)
  @Put(':id')
  updateTask(
    @Param('id') id: string,
    @Body(new ValidationPipe()) body: UpdateTaskDto,
    @UserRoles() roles,
  ) {
    if (!roles) {
      throw new UnauthorizedException();
    }
    return this.taskService.update(id, body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string, @UserRoles() roles) {
    if (!roles) {
      throw new UnauthorizedException();
    }
    return this.taskService.delete(id);
  }
}
