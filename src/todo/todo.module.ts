import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Todo } from './todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])], //------- Import TypeORM with Todo entity
  controllers: [TodoController], //--------------------- Handles routes 
  providers: [TodoService], //-------------------------- Handles the logic for every request
})
export class TodoModule {}
