import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // clean the data that is not in the DTO
      forbidNonWhitelisted: true, // throw an error if the data is not in the DTO
    }),
  );
  await app.listen(3003);
}
bootstrap();
