import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class SendMeesageDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsPhoneNumber()
  receiver: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  message: string;
}
