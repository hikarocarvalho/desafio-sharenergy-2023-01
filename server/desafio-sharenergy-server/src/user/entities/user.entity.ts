import { Prisma } from '@prisma/client';
export class User implements Prisma.DbUserUncheckedCreateInput {
  id: string;
  customerId: string;
  name: string;
  password: string;
  createAt: Date;
  deleteAt: Date;
}
