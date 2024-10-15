import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto} from './dto/update-todo.dto';
import { log } from 'console';

/* ==== Controller decorator ==== 
  - Everything within this controller will have prefix of 'todos'*/
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

/* ==== Get All Todos ==== 
   - method: GET
   - url: '/todos'
   - This is to send a GET */
  @Get() //--------------------- Get decorator
  findAll() {
    return this.todoService.findAll();
  }

  /* ==== Get Todo By Id ==== 
   - method: GET
   - url: /todos/id
   - For get requests with parameters
   - the @Params decorator is added for the id*/
  @Get(':id') //----------------- Get decorator with id passed in
  findOne(@Param('id') id: number) {
    return this.todoService.findOne(id);
  }
/* ==== Add A todo ====
- method: POST
- url: /todos */
  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {// ----- There is a body decorator to parse the request body
    return this.todoService.create(createTodoDto);
  }

  /* ==== Update A todo ====
  - method: PUT
  - request-url: /todos/id  */
  @Put(':id')
  update(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, updateTodoDto);
  }

  /* ==== Delete A todo ====
  - method: DELETE
  - url: /todos/id  */
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.todoService.remove(id);
  }
}
