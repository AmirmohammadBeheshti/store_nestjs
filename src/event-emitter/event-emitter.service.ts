import { Injectable, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { events } from 'src/common/constant/event';
import { OrderCreatedEvent } from './class.event';

@Injectable()
export class EventEmitterService {
  constructor(private eventEmitter: EventEmitter2) {}

  emitEvent() {
    console.log('Logged Value Before Emit Event ');
    const value = new OrderCreatedEvent();
    value.family = 'Beheshti';
    value.name = 'Amirmohammad';
    this.eventEmitter.emit(events.EVENT_EMITTER, value);
    return value;
  }
}
