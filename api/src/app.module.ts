import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { config, validationSchema } from './config/configuration';
import { TypeOrmConfigService } from './config/database';
import { MessagesModule } from './messages/messages.module';
import { TwilioService } from './twilio/twilio.service';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config], validationSchema, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    MessagesModule,
  ],
  controllers: [],
  providers: [TwilioService],
})
export class AppModule {}
