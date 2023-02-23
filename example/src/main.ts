import { PrismaService } from '@icapps/nestjs-prisma';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prisma
  const prismaService = await app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Example API')
    .setDescription('Example API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
