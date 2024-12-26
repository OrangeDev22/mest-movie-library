import { Injectable } from '@nestjs/common';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    return await this.prisma.user.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async findOneByAuth0Id(auth0Id: string) {
    return await this.prisma.user.findUnique({ where: { auth0Id } });
  }

  async update(auth0Id: string, updateUserInput: UpdateUserInput) {
    return await this.prisma.user.update({
      where: { auth0Id },
      data: updateUserInput,
    });
  }

  async remove(auth0Id: string) {
    return await this.prisma.user.delete({ where: { auth0Id } });
  }
}
