import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'todo_db',
    autoLoadEntities: true,
    synchronize: true, // for development only
  }), TodoModule,
],
  controllers: [AppController], //------------- Responsible for the methods that handle api requests.
  providers: [AppService], // ----------------- Responsible for all the business logic of the requests.
})
export class AppModule {}
