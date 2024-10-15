import { IsNotEmpty, IsOptional, IsString, MaxLength, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/* 
- This defines the shape of the  todo object in the POST request 
- class-validator provides more decorators to use in validation 
*/
export class CreateTodoDto {
  @IsNotEmpty({message: "The title cannot be empty 🫤"})
  @IsString()
  @MaxLength(255)
  @ApiProperty({ description: 'The title of the todo', maxLength: 255 })
  title: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'A detailed description of the todo', required: false })
  description?: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ description: 'Whether the todo is completed', default: false })
  isCompleted?: boolean;
}
