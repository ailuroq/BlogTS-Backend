import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from "../service/users.service";
import { CreateUserDto } from "../models/dto/create-user.dto";
import { User } from "../models/user.entity";

@Controller()
export class RegController {
  constructor(private readonly usersService: UsersService) {
  }

  @Post("register")
  async create(@Body() userDto: CreateUserDto): Promise<User> {
    return this.usersService.create(userDto);
  }
}
