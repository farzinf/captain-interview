import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './auth-login.dto';
import { AuthCodeDto } from './auth-code.dto';

import { User } from '../users/user.schema';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authServece: AuthService) {}

  @Post('login')
  login(@Body(new ValidationPipe()) data: AuthLoginDto): Promise<boolean> {
    try {
      return this.authServece.login(data.email, data.password);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('code')
  code(@Body(new ValidationPipe()) data: AuthCodeDto): Promise<User> {
    try {
      return this.authServece.code(data.username, data.password, data.code);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
