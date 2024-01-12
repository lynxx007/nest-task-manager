import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { TaskDocument } from 'src/modules/tasks/schema/task.schema';

export type UserDocument = mongoose.HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    default: [],
  })
  tasks: TaskDocument[];

  @Prop({ default: ['User'] })
  roles: string[];

  @Prop({
    default: '',
    enum: [
      'Student',
      'Teacher',
      'Software Engineer',
      'Manager',
      'Software Developer',
    ],
  })
  currentPosition: string;

  @Prop({ default: '' })
  avatar: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    default: [],
  })
  teams: UserDocument[];
}

export const UserSchema = SchemaFactory.createForClass(User);
