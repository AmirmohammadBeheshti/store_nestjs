import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.servie';

@Controller('product')
export class TestController {
  constructor(private readonly testService: TestService) {}
  @Get('PstUser')
  postUser() {
    return this.testService.postUser();
  }
  @Get('get')
  getData() {
    return this.testService.finded();
  }
}
