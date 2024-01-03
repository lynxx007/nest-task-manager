import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../user/schema/user.schema';

export type TaskDocument = mongoose.HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  taskOwner: User;

  @Prop()
  title: string;

  @Prop({
    type: [String],
    default: [],
    enum: ['In Progress', 'Assigned', 'Completed'],
  })
  currentState: string[];
}

export const TaskSchema = SchemaFactory.createForClass(Task);
