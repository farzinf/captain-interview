import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  const config = new DocumentBuilder()
    .setTitle('Captain API')
    .setDescription('The captain interview test API documentation')
    .setVersion('1.0')
    .addTag('Users')
    .addTag('Payments')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const swaggerOptions = {
    swaggerOptions: { docExpansion: 'none' },
  };
  SwaggerModule.setup('api', app, document, swaggerOptions);
  await app.listen(+process.env.PORT);
}
bootstrap();
