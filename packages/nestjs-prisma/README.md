# `@icapps/nestjs-prisma`

Everything you need to get started with [Prisma](https://www.prisma.io) in [NestJS](https://nestjs.com)

## Installation

### Quick installation

```bash
npx @icapps/nestjs-prisma
```

### Manual installation

#### 1. Install `@icapps/nestjs-prisma` and Prisma Client

```bash
npm install @icapps/nestjs-prisma @prisma/client
```

#### 2. Install Prisma CLI

```bash
npm install prisma --save-dev
```

#### 3. Initialize Prisma

```bash
npx prisma init
```

## Usage

### 1. Import PrismaModule into your root module

```js
// app.module.ts

import { Module } from '@nestjs/common';
import { PrismaModule } from '@icapps/nestjs-prisma';

@Module({
  imports: [PrismaModule],
})
export class AppModule {}
```

### 2. Enable shutdown hooks

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

### 3. Import PrismaService to get started

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
