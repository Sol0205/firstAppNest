import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }))

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  //fetch('http://localhost:3000/users')
  //Con esto solo desde el siguiente link puedo acceder a los datos que se van guardando desde mi base de datos
  app.enableCors({
    origin: 'https://translate.google.com/?sl=en&tl=es&op=translate'
  })

  await app.listen(4000);
}
bootstrap();
