import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({
    description: 'Here goes the name of The Customer',
    example: 'maria',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Here goes the cpf of The Customer',
    example: '000.000.000-00',
  })
  @IsString()
  readonly cpf: string;

  @ApiProperty({
    description: 'Here goes the email of The Customer',
    example: 'maria@email.com',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    description: 'Here goes the telphone of The Customer',
    example: '(00)0000-0000',
  })
  @IsString()
  readonly telPhone: string;

  @ApiProperty({
    description: 'Here goes the Postal-Code of The Customer',
    example: '00000-000',
  })
  @IsString()
  readonly postCode: string;

  @ApiProperty({
    description: 'Here goes the addressNumber of The Customer',
    example: '00',
  })
  @IsString()
  readonly addressNumber: string;

  @ApiProperty({
    description: 'Here goes the street of The Customer',
    example: 'av. JK',
  })
  @IsString()
  readonly street: string;

  @ApiProperty({
    description: 'Here goes the block of The Customer',
    example: 'bairro maringá',
  })
  @IsString()
  readonly block: string;

  @ApiProperty({
    description: 'Here goes the city of The Customer',
    example: 'São Paulo',
  })
  @IsString()
  readonly city: string;

  @ApiProperty({
    description: 'Here goes the state of The Customer',
    example: 'São Paulo',
  })
  @IsString()
  readonly state: string;

  @ApiProperty({
    description: 'Here goes the address complement of The Customer',
    example: 'quadra:17 , lote:28',
  })
  @IsString()
  readonly complement: string;
  @ApiProperty({
    description:
      'Here goes the userId String, to link a customer registration to a user',
    example: '1AAA2BBB',
  })
  @IsString()
  readonly userId: string;
}
