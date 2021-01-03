import { Module } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "../models/post.entity";
import { User } from "../models/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User, Post])],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}
