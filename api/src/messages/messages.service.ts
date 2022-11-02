import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TwilioService } from "../twilio/twilio.service";
import { OutgoingCallerIdInstance } from "twilio/lib/rest/api/v2010/account/outgoingCallerId";
import { Repository } from "typeorm";
import { SendMeesageDto } from "./dto/send-message.dto";
import { Messages } from "./entities/message.entity";

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Messages)
    private readonly messagesRepository: Repository<Messages>,
    private readonly twilioService: TwilioService
  ) {}

  async getAllMessagesSent(): Promise<Messages[]> {
    return await this.messagesRepository.find({
      order: { created_at: "DESC" },
    });
  }

  async sendMessage(dataMessage: SendMeesageDto): Promise<Messages> {
    try {
      const message = this.messagesRepository.create(dataMessage);
      await this.twilioService.sendMessage(
        dataMessage.receiver,
        dataMessage.message
      );
      return await this.messagesRepository.save(message);
    } catch (e) {
      throw new HttpException(
        e.message ? e.message : "message could not be sent",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
  async listVerifiedNumbers(): Promise<OutgoingCallerIdInstance[]> {
    return await this.twilioService.getVerifiedNumbers();
  }
}
