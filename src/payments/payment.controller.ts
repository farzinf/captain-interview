import {
  Controller,
  Get,
  Post,
  Body,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';
import { PaymentCreateDto } from './payment-create.dto';
import { Payment } from './payment.schema';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private paymentServece: PaymentService) {}

  @Post()
  create(
    @Body(new ValidationPipe()) payment: PaymentCreateDto,
  ): Promise<Payment> {
    try {
      return this.paymentServece.create(payment);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  findAll(): Promise<Payment[]> {
    try {
      return this.paymentServece.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
