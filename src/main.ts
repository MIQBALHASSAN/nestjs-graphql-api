import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const host = configService.get('HOST');
  app.enableCors();
  await app.listen(port, host);
  Logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
