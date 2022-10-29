import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EventEmitterService } from './event-emitter.service';

@ApiTags('Event Emitter')
@Controller('event-emitter')
export class EventEmitterController {
  constructor(private readonly eventEmitterService: EventEmitterService) {}
  @Post()
  emitEvent() {
    return this.eventEmitterService.emitEvent();
  }
}
