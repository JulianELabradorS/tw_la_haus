import { Test, TestingModule } from '@nestjs/testing';
import { TwilioService } from '../../twilio/twilio.service';
import { SendMeesageDto } from '../dto/send-message.dto';
import { Messages } from '../entities/message.entity';
import { MessagesController } from '../messages.controller';
import { MessagesService } from '../messages.service';

describe('MessagesController', () => {
  let controller: MessagesController;
  const mockedMessages: Messages[] = [
    {
      id: 'cdb63720-9628-5ef6-bbca-2e5ce6094f3c',
      message: 'test message',
      receiver: '+573012435351',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  const mockedPhones = [
    {
      sid: 'PNbf383a597352tr7fef0c6efc615d674',
      dateCreated: '2022-10-31T22:03:00.000Z',
      dateUpdated: '2022-10-31T22:03:00.000Z',
      friendlyName: '573004141314',
      phoneNumber: '+573004141314',
      uri: '/2010-04-01/Accounts/testsid/OutgoingCallerIds/testacco.json',
    },
  ];

  const mockedMessageDto: SendMeesageDto = {
    message: 'test message',
    receiver: '+573453242124',
  };

  const mockMessageService = {
    getAllMessagesSent: jest.fn(() => mockedMessages),
    listVerifiedNumbers: jest.fn(() => mockedPhones),
    sendMessage: jest.fn((dto) => {
      return {
        id: '081710e3-efbf-49b3-8193-0a4a881ed79b',
        ...dto,
        created_at: '2022-11-02T06:59:40.088Z',
        updated_at: '2022-11-02T06:59:40.088Z',
      };
    }),
  };
  const mockTwilioService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
      providers: [
        { provide: MessagesService, useValue: mockMessageService },
        TwilioService,
      ],
    })
      .overrideProvider(TwilioService)
      .useValue(mockTwilioService)
      .compile();

    controller = module.get<MessagesController>(MessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all verified phones', () => {
    expect(controller.verifiedNumbers()).toEqual(mockedPhones);
    expect(mockMessageService.listVerifiedNumbers).toBeCalledTimes(1);
  });

  it('should return all messages sent', () => {
    expect(controller.getAllMessages()).toEqual(mockedMessages);
    expect(mockMessageService.getAllMessagesSent).toBeCalledTimes(1);
  });

  it('should send message', () => {
    expect(controller.sendMessage(mockedMessageDto)).toEqual({
      id: '081710e3-efbf-49b3-8193-0a4a881ed79b',
      ...mockedMessageDto,
      created_at: '2022-11-02T06:59:40.088Z',
      updated_at: '2022-11-02T06:59:40.088Z',
    });
    expect(mockMessageService.sendMessage).toBeCalledTimes(1);
  });
});
