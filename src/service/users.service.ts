import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../models/user.entity";
import { CreateUserDto } from "../models/dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository:Repository<User>
  ) {}

  findAll(): Promise<User[]>{
    return this.userRepository.find()
  }
  findOne(username:string): Promise<User> {
    return this.userRepository.findOne({username:username})
  }
  create(userDto:CreateUserDto):Promise<User> {
    return this.userRepository.save(userDto)

  }
}
