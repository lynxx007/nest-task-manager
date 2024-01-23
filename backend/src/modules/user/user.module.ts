import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import bcrypt from 'bcrypt';
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;
          schema.pre('save', async function () {
            if (!this.isModified('password')) return;

            this.password = await bcrypt.hash(this.password, 10);
          });
          return schema;
        },
      },
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;
          schema.set('toJSON', {
            transform: function (doc, ret) {
              delete ret.password;
              return ret;
            },
          });
          return schema;
        },
      },
    ]),
  ],
  exports: [MongooseModule, UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
