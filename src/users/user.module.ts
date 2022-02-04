import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchema } from './user.schema';
import * as bcrypt from 'bcrypt';

const BcryptService = {
  provide: 'BCRYPT',
  useValue: bcrypt,
};

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UserService, BcryptService],
  exports: [UserService, BcryptService],
})
export class UserModule {}
