import { Module } from '@nestjs/common';
import { TasksModule } from './modules/tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: __dirname + '/../../.env' }),
    MongooseModule.forRoot(String(process.env.MONGO_URL), {
      dbName: 'nest-task-manager',
    }),
    TasksModule,
    UserModule,
    AuthModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', '..', 'client', 'dist'),
    // }),
  ],
})
export class AppModule {}
