import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCartDto {
  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;

  @IsString()
  @IsOptional()
  readonly year?: number;
}
