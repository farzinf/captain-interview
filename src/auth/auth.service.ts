import { User } from './../users/user.schema';
import { Inject, Injectable } from '@nestjs/common';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    @Inject('BCRYPT') private readonly bcrypt,
  ) {}

  async login(email: string, pass: string): Promise<boolean> {
    const user = await this.userService.findOne(email);
    if (user && user.password === pass) {
      return true;
    }
    return false;
  }

  async code(username: string, pass: string, code: number): Promise<User> {
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }
}
