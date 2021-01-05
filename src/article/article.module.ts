import { Module } from '@nestjs/common';
import { UsersService } from '../user/users.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Article } from "./article.entity";
import { User } from "../user/user.entity";
import { ArticleService } from "./article.service";

@Module({
  imports: [TypeOrmModule.forFeature([User, Article])],
  providers: [ArticleService],
  exports: [ArticleService, TypeOrmModule],
})
export class ArticleModule {}
