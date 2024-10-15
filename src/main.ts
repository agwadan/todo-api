import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //------------ Used to validate data against the DTO object
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