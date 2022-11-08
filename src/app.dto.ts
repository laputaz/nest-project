import { IsInt } from 'class-validator';

export class allDto {
  @IsInt()
  id: string;
}
