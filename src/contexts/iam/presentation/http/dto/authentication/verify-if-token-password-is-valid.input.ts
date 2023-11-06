import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export abstract class VerifyIfTokenPasswordIsValidInput {
  @ApiProperty()
  @IsString()
  token: string;
}
