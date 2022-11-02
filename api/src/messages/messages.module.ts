import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { TwilioService } from '../twilio/twilio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Messages } from './entities/message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Messages])],
  controllers: [MessagesController],
  providers: [MessagesService, TwilioService],
})
export class MessagesModule {}
