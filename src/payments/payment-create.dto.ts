import { ApiProperty } from '@nestjs/swagger';

export class PaymentCreateDto {
  @ApiProperty({ required: true })
  plan: number;
}
