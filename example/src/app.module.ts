import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from '@icapps/nestjs-prisma';

@Module({
  imports: [PrismaModule, TodoModule],
})
export class AppModule {}
