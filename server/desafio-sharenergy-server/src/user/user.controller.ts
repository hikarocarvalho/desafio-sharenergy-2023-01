import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @ApiOperation({
    description: 'Used to return all data values from User table',
  })
  @Get()
  findAll() {
    return this.UserService.findAll();
  }

  @ApiOperation({
    description: 'Used to return data values from a specific user',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param() params) {
    return this.UserService.findOne(String(params.id));
  }

  @ApiOperation({
    description: 'Used to register a new user',
  })
  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() createUserDto: CreateUserDto) {
    return this.UserService.create(createUserDto);
  }

  @ApiOperation({
    description: 'Used to update specific values from a specific user',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.UserService.update(String(id), updateUserDto);
  }

  @ApiOperation({
    description: 'Used to delete a user',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.UserService.remove(String(id));
  }
}
