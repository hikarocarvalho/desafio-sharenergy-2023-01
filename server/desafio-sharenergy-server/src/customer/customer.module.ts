import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CustomerRepository } from './repositories/customer.repository';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, PrismaService, CustomerRepository],
})
export class CustomerModule {}
