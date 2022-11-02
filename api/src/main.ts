import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const ENV_DEPLOY = ['production'];
const DEBUG = !ENV_DEPLOY.includes(process.env.NODE_ENV);
const PORT = process.env.PORT;
const SERVER = DEBUG ? '127.0.0.1' : '::';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: false,
      forbidUnknownValues: true,
      whitelist: true,
      transform: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Twilio Api')
    .setDescription('Api for sending messages through the twilio platform.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-documentation', app, document);

  await app.listen(Number(PORT), SERVER);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
