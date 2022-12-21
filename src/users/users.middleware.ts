import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    const token = req.headers.authorization;
    console.log(req.headers);
    try {
      await this.jwtService.verify(token);
      next();
    } catch (error) {
      console.log(error);
    }
  }
}
