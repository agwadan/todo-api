import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //===== Swagger configuration =====
  const config = new DocumentBuilder()
    .setTitle('Todo API')
    .setDescription('The Todo API documentation')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); 

  //=== Pipe for validating req bodies against DTO objects ====
  app.useGlobalPipes(new ValidationPipe()); 
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

//-- HTTP requests go from controller --> services

/* ==== MODULES ==== */
//- Group of closely related capabilities
//- The app module is the root module & todo module is the child module.
// - Any module created should be imported in the imports array of the parent module

/* ==== CONTROLLERS ==== */
//- Controllers define the routes and http verbs used for the routes


/* ==== SERVICES ==== */
// - These have the business logic for the requests