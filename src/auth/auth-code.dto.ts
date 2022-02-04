import { ApiProperty } from '@nestjs/swagger';

export class AuthCodeDto {
  @ApiProperty({ required: true })
  username: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: true })
  code: number;
}
