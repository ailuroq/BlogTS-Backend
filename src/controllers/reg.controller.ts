import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../schemas/dto/create-user.dto';
import { UsersService } from '../service/users.service';
import { User } from '../schemas/users.schema';

@Controller()
export class RegController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async create(@Body() userDto: CreateUserDto): Promise<User> {
    return this.usersService.create(userDto);
  }
}
