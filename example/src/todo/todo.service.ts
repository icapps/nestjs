import { PrismaService } from '@icapps/nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTodoDto) {
    return this.prisma.todo.create({ data });
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  findOne(id: number) {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateTodoDto) {
    return this.prisma.todo.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.todo.delete({ where: { id } });
  }
}
