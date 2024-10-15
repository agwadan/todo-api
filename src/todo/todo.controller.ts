import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto} from './dto/update-todo.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Todo } from './todo.entity';

/* ==== Controller decorator ==== 
  - Everything within this controller will have prefix of 'todos'*/
  @ApiTags('todos')  // Group all /todos endpoints in Swagger
  @Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

/* ==== Get All Todos ==== 
   - method: GET
   - url: '/todos'
   - This is to send a GET */
  @Get() //--------------------- Get decorator
  @ApiOperation({ summary: 'Retrieve all Todos' })
  @ApiResponse({ status: 200, description: 'List of all todos', type: [Todo] })
  findAll() {
    return this.todoService.findAll();
  }

  /* ==== Get Todo By Id ==== 
   - method: GET
   - url: /todos/id
   - For get requests with parameters
   - the @Params decorator is added for the id*/
  @Get(':id') //----------------- Get decorator with id passed in
  @ApiOperation({ summary: 'Retrieve a Todo by ID' })
  @ApiResponse({ status: 200, description: 'The found todo', type: Todo })
  findOne(@Param('id') id: number) {
    return this.todoService.findOne(id);
  }
/* ==== Add A todo ====
- method: POST
- url: /todos */
  @Post()
  @ApiOperation({ summary: 'Create a new Todo' })
  @ApiResponse({ status: 201, description: 'The todo has been successfully created.', type: Todo })
 create(@Body() createTodoDto: CreateTodoDto) {// ----- There is a body decorator to parse the request body
    return this.todoService.create(createTodoDto);
  }

  /* ==== Update A todo ====
  - method: PUT
  - request-url: /todos/id  */
  @Put(':id')
  @ApiOperation({ summary: 'Update a Todo by ID' })
  @ApiResponse({ status: 200, description: 'The updated todo', type: Todo })
  update(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, updateTodoDto);
  }

  /* ==== Delete A todo ====
  - method: DELETE
  - url: /todos/id  */
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Todo by ID' })
  @ApiResponse({ status: 204, description: 'The todo has been deleted' })
  remove(@Param('id') id: number) {
    return this.todoService.remove(id);
  }
}
