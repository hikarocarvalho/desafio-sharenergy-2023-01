import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { handleError } from 'src/utils/handle-error.util';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  private userResultData = {
    id: true,
    name: true,
    password: false,
    createAt: false,
    deleteAt: false,
  };

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.prisma.dbUser
      .create({
        select: this.userResultData,
        data: {
          ...createUserDto,
          password: await bcrypt.hash(createUserDto.password, 10),
        },
      })
      .catch(handleError);
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.dbUser.findMany({
      select: this.userResultData,
    });

    if (!users) {
      throw new NotFoundException('Any registered users');
    }

    return users;
  }
  async findOne(id: string): Promise<User> {
    const user = await this.prisma.dbUser.findFirstOrThrow({
      select: this.userResultData,
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new NotFoundException('The user with id = ' + id + ' not found!');
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const verifyUser = await this.prisma.dbUser.findUnique({ where: { id } });
    if (!verifyUser) {
      throw new NotFoundException('The user with id = ' + id + ' not found!');
    }

    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    return this.prisma.dbUser
      .update({
        select: this.userResultData,
        data: {
          ...updateUserDto,
        },
        where: {
          id,
        },
      })
      .catch(handleError);
  }

  async remove(id: string): Promise<User> {
    const verifyUser = await this.prisma.dbUser.findUnique({ where: { id } });

    if (!verifyUser) {
      throw new NotFoundException('The user with id = ' + id + ' not found!');
    }

    return this.prisma.dbUser.delete({
      select: this.userResultData,
      where: {
        id,
      },
    });
  }
}
