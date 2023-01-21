import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  UseGuards,
  Post,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly CustomerService: CustomerService) {}

  @ApiOperation({
    description: 'Used to return all data values from customer table',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.CustomerService.findAll();
  }

  @ApiOperation({
    description: 'Used to return all data values from a specific customer',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param() params) {
    return this.CustomerService.findOne(String(params.id));
  }

  @ApiOperation({
    description: 'Used to register a new customer',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.CustomerService.create(createCustomerDto);
  }

  @ApiOperation({
    description:
      'Used to update a specific data value from a specific customer',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.CustomerService.update(String(id), updateCustomerDto);
  }

  @ApiOperation({
    description: 'Used to delete a specific customer',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CustomerService.remove(String(id));
  }
}
