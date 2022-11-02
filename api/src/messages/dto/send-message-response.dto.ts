import { ApiProperty } from "@nestjs/swagger";
import {
  IsDateString,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from "class-validator";

export class ResponseMeesageDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  message: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  receiver: string;

  @ApiProperty()
  @IsDateString()
  created_at: Date;

  @ApiProperty()
  @IsDateString()
  updated_at: Date;
}
