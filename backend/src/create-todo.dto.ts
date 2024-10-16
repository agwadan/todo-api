import { IsNotEmpty, IsString, MaxLength, IsOptional, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;
}
