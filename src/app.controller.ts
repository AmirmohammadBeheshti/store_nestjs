import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TransformDataPipe } from './common/pipe/transform-data.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // when set the pipe for body after request set the pipe and filter that on this case
  @Post()
  getHello(
    @Body(TransformDataPipe) payload: { name: string; family: string },
  ): any {
    return payload;
  }
}
