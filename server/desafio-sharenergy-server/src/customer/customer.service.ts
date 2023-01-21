import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.dbCustomer.findMany();
  }

  findOne(id: string) {
    return this.prisma.dbCustomer.findUnique({ where: { id } });
  }

  create(createCustomerDto: CreateCustomerDto) {
    return this.prisma.dbCustomer.create({ data: createCustomerDto });
  }

  update(id: string, updateCustomerDto: UpdateUserDto) {
    return this.prisma.dbCustomer.update({
      data: updateCustomerDto,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.dbCustomer.delete({ where: { id } });
  }
}
