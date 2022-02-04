import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { IUser } from '../users/user.interface';
import { IPayment } from './payment.interface';

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment implements IPayment {
  @Prop()
  plan: number;

  @Prop()
  status: boolean;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId: IUser;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
