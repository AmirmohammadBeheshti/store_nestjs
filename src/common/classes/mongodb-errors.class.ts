import { HttpException } from '@nestjs/common';

export class UniqueConstraintsError extends HttpException {
  constructor(msg: string | Record<string, any>) {
    super(msg, 406);
    this.message = 'Unique rule violation';
  }
}
