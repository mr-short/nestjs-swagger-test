import { Request, Response, NextFunction } from 'express';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class SampleMiddleware implements NestMiddleware {
  use = (req: Request, res: Response, next: NextFunction): void => {
    next();
  };
}
