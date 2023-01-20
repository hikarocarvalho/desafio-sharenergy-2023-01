import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerRepository } from './repositories/customer.repository';

@Injectable()
export class CustomerService {
  constructor(private readonly repository: CustomerRepository) {}

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  create(createCustomerDto: CreateCustomerDto) {
    return this.repository.create(createCustomerDto);
  }

  update(id: string, updateCustomerDto: UpdateUserDto) {
    return this.repository.update(id, updateCustomerDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
