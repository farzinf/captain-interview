import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Payment, PaymentDocument } from './payment.schema';
import { IPayment } from './payment.interface';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
  ) {}

  async create(payment: IPayment): Promise<Payment> {
    return this.paymentModel.create(payment);
  }

  async findAll(): Promise<Payment[]> {
    return this.paymentModel.find().exec();
  }
}
