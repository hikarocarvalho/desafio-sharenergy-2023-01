import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthResponseDto } from './dto/auth-response.dto';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(authDto: AuthDto): Promise<AuthResponseDto> {
    const { name, password } = authDto;

    const user = await this.prisma.dbUser.findUnique({ where: { name } });

    if (!user) {
      throw new NotFoundException('Invalid user or password!');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid user');
    }

    delete user.password;

    return {
      token: this.jwtService.sign({ name }),
      user,
    };
  }
}
