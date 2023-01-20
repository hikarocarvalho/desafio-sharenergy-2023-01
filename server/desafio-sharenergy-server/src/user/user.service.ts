import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repositories';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  findUnique(name: string, password: string) {
    return this.repository.findUnique(name, password);
  }

  create(createUserDto: CreateUserDto) {
    return this.repository.create(createUserDto);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
