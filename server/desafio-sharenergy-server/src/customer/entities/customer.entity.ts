import { Prisma } from '@prisma/client';
export class Customer implements Prisma.DbCustomerUncheckedCreateInput {
  id: string;
  name: string;
  cpf: string;
  email: string;
  telPhone: string;
  postCode: string;
  addressNumber: string;
  street: string;
  block: string;
  city: string;
  state: string;
  complement: string;
  userId: string;
  createAt?: Date;
  deleteAt?: Date | null;
}
