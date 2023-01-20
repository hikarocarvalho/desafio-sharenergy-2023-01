import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.prisma.dbCustomer.create({
      data: createCustomerDto,
    });
  }

  async findAll(): Promise<Customer[]> {
    return this.prisma.dbCustomer.findMany({
      where: {
        deleteAt: null,
      },
    });
  }

  async findOne(id: string): Promise<Customer> {
    return this.prisma.dbCustomer.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.prisma.dbCustomer.update({
      data: updateCustomerDto,
      where: {
        id: id,
      },
    });
  }

  async remove(id: string): Promise<Customer> {
    return this.prisma.dbCustomer.update({
      data: {
        deleteAt: new Date(),
      },
      where: {
        id: id,
      },
    });
  }
}
