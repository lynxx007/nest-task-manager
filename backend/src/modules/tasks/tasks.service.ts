import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schema/task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async findOne(id: string): Promise<TaskDocument> {
    const task = await this.taskModel.findById(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  async findByUser(userId: string) {
    const tasks = await this.taskModel.find({ taskOwner: userId });
    if (!tasks) {
      throw new NotFoundException('Tasks not found');
    }
    return tasks;
  }

  async create(
    createTaskDto: CreateTaskDto,
    userId: string,
  ): Promise<{ task: TaskDocument; message: string }> {
    const createdTask = await this.taskModel.create({
      taskOwner: userId,
      ...createTaskDto,
    });
    return {
      message: 'Task created successfully',
      task: createdTask,
    };
  }

  async update(
    id: string,
    body: UpdateTaskDto,
  ): Promise<{ message: string; task: TaskDocument }> {
    const updatedTask = await this.taskModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!updatedTask) {
      throw new NotFoundException('Task not found');
    }
    return {
      message: 'Task updated successfully',
      task: updatedTask,
    };
  }

  async delete(id: string): Promise<{ message: string }> {
    const deletedTask = await this.taskModel.findByIdAndDelete(id);
    if (!deletedTask) {
      throw new NotFoundException('Task not found');
    }
    return {
      message: 'Task deleted successfully',
    };
  }
}
