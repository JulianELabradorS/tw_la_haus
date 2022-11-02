import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import Api from "twilio/lib/rest/Api";
import { ResponseMeesageDto } from "./dto/send-message-response.dto";
import { SendMeesageDto } from "./dto/send-message.dto";
import { MessagesService } from "./messages.service";

@ApiTags("Messages")
@Controller("messages")
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @ApiOkResponse({ type: ResponseMeesageDto })
  @ApiOperation({ description: "send message" })
  @Post()
  sendMessage(@Body() dataMessage: SendMeesageDto) {
    return this.messagesService.sendMessage(dataMessage);
  }
  @ApiOkResponse({ type: [ResponseMeesageDto] })
  @ApiOperation({ description: "get all messages sent" })
  @Get()
  getAllMessages() {
    return this.messagesService.getAllMessagesSent();
  }
}
