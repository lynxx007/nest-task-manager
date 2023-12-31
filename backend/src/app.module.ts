import { Module } from '@nestjs/common';
import { TasksModule } from './modules/tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: __dirname + '/../../.env' }),
    MongooseModule.forRoot(process.env.MONGO_URL as string, {
      dbName: 'nest-task-manager',
    }),
    TasksModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
