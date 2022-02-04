import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDto {
  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  password: string;
}
