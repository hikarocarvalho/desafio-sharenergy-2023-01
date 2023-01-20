import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description:
      'Here goes the customerId String, to link a customer registration to a user',
    example: '1AAA2BBB',
  })
  @IsString()
  readonly customerId: string;
  @ApiProperty({
    description: 'Here goes the name of The User',
    example: 'João',
  })
  @IsString()
  readonly name: string;
  @ApiProperty({
    description: 'Here goes the user password',
    example: 'SStt112Rt',
  })
  @IsString()
  readonly password: string;
}
