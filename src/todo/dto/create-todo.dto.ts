import { IsNotEmpty, IsOptional, IsString, MaxLength, IsBoolean } from 'class-validator';

/* 
- This defines the shape of the  todo object in the POST request 
- class-validator provides more decorators to use in validation 
*/
export class CreateTodoDto {
  @IsNotEmpty({message: "The title cannot be empty 🫤"})
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
