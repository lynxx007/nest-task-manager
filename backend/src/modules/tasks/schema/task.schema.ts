import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import type { UserDocument } from '../../user/schema/user.schema';

export type TaskDocument = mongoose.HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  taskOwner: UserDocument;

  @Prop()
  title: string;

  @Prop()
  to: Date;

  @Prop()
  from: Date;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'User' })
  members?: UserDocument[];
}

export const TaskSchema = SchemaFactory.createForClass(Task);
