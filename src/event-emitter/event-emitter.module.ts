import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventEmitterController } from './event-emitter.controller';
import { EventEmitterService } from './event-emitter.service';

@Module({
  // we can set the option on for root but has a default config
  imports: [EventEmitterModule.forRoot()],
  controllers: [EventEmitterController],
  providers: [EventEmitterService],
})
export class EventEmitterMo {}
