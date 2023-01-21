import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Receive one email from the user',
    example: 'joaao',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'User Password.',
    example: 'wefasdf@gsa_56',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
