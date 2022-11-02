import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';
import { OutgoingCallerIdInstance } from 'twilio/lib/rest/api/v2010/account/outgoingCallerId';

@Injectable()
export class TwilioService {
  private twilioClient: Twilio;
  constructor(private readonly configService: ConfigService) {
    const accountSid = configService.get('twilioAccountSid');
    const token = configService.get('twilioAuthToken');

    this.twilioClient = new Twilio(accountSid, token);
  }
  async sendMessage(receiverPhoneNumber: string, message: string) {
    const senderPhoneNumber = this.configService.get('twilioSender');

    return await this.twilioClient.messages.create({
      body: message,
      from: senderPhoneNumber,
      to: receiverPhoneNumber,
    });
  }
  async getVerifiedNumbers(): Promise<OutgoingCallerIdInstance[]> {
    const callerIds: OutgoingCallerIdInstance[] =
      await this.twilioClient.outgoingCallerIds.list();
    if (!callerIds.length) {
      throw new NotFoundException('no verified numbers found');
    }
    callerIds.forEach(async (item) => delete item.accountSid);
    return callerIds;
  }
}
