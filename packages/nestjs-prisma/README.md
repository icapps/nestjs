# `@icapps/nestjs-prisma`

Everything you need to get started with [Prisma](https://www.prisma.io) in [NestJS](https://nestjs.com)

## Getting started

### 1. Install Prisma CLI as a development dependency

```bash
npm install prisma --save-dev
```

### 2. Initialize Prisma

```bash
npx prisma init
```

### 3. Install Prisma Client

```bash
npm install @prisma/client
```

### 4. Import PrismaModule into your root module

```js
// app.module.ts

import { Module } from '@nestjs/common';
import { PrismaModule } from '@icapps/nestjs-prisma';

@Module({
  imports: [PrismaModule],
})
export class AppModule {}
```

### 5. Enable shutdown hooks

```js
// main.ts

import { PrismaService } from '@icapps/nestjs-prisma';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = await app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(3000);
}
bootstrap();
```

### 6. Import PrismaService to get started

```js
// todo.service.ts

import { PrismaService } from '@icapps/nestjs-prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.todo.findMany();
  }
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[ISC](LICENSE.md)
