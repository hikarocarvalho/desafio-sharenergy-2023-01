import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.prisma.dbUser.create({
      data: createUserDto,
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.dbUser.findMany({
      where: {
        deleteAt: null,
      },
    });
  }

  async findOne(id: string): Promise<User> {
    return this.prisma.dbUser.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findUnique(name: string, password: string): Promise<User> {
    const user = await this.prisma.dbUser.findUnique({
      where: {
        name: name,
      },
    });
    if (user.password === password) {
      return user;
    }
    return null;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.prisma.dbUser.update({
      data: updateUserDto,
      where: {
        id: id,
      },
    });
  }

  async remove(id: string): Promise<User> {
    return this.prisma.dbUser.update({
      data: {
        deleteAt: new Date(),
      },
      where: {
        id: id,
      },
    });
  }
}
