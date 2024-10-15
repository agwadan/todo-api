import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    // Load environment variables
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration globally available in the app
    }),

    // TypeORM configuration using environment variables
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule to access env variables
      inject: [ConfigService], // Inject ConfigService to read env variables
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: true, // Keep it true only in development, set to false in production
      }),
    }),

    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
