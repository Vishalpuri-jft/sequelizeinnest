import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: { Name: string }) {
    try {
      const payload = { user };
      return this.jwtService.sign(payload);
    } catch (error) {
      return { error };
    }
  }
}
