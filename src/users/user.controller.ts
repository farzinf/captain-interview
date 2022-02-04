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
import { UserService } from './user.service';
import { UserCreateDto } from './user-create.dto';
import { User } from './user.schema';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userServece: UserService) {}

  @Post()
  create(@Body(new ValidationPipe()) user: UserCreateDto): Promise<User> {
    try {
      return this.userServece.create(user);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  findAll(): Promise<User[]> {
    try {
      return this.userServece.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
