import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IUser } from './user.interface';

export type UserDocument = User & Document;

@Schema()
export class User implements IUser {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  isAdmin: boolean;

  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
