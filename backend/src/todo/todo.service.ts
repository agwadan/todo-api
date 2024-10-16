import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable() //------------------------------------- This service can be injected in any class that depends on it.
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>, //----- From the todo entity
  ) {}

  /* ==== Find all todos logic ==== */
  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  /* ==== Find one todo logic ==== */
  async findOne(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`); //---- Responds with 404 not found
    }
    return todo;
  }

  /* ==== Create new todo logic ==== */
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(createTodoDto);
    return this.todoRepository.save(todo);
  }

  /* ==== Update todo logic ==== */
  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    await this.todoRepository.update(id, updateTodoDto);
    return this.findOne(id); 
  }

  /* ==== Delete todo logic ==== */
  async remove(id: number): Promise<{message: string}> {
    const result = await this.todoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Todo with ID ${id} not found`); //---- Responds with 404 not found
    }

    return { message: `Todo with ID ${id} successfully deleted` };
  }
}
