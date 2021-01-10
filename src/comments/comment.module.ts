import { Module } from '@nestjs/common';
import { UsersService } from '../user/users.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Commentary } from "./comment.entity";
import { Article } from "../article/article.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Commentary, Article])],
  providers: [],
  exports: [ TypeOrmModule],
})
export class CommentModule {}
