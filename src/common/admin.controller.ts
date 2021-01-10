import { Controller, Request, Post, UseGuards, Get, Req, Body, Param } from "@nestjs/common";
import { LocalAuthGuard } from "../auth/guards/local-auth.guard";
import { AuthService } from "../auth/auth.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { UsersService } from "../user/users.service";
import { CreateArticleDto } from "../article/dto/article-create.dto";
import { AuthUser } from "./decorators/auth-user.decorator";
import { User } from "../user/user.entity";
import { Article } from "../article/article.entity";
import { ArticleService } from "../article/article.service";


@Controller("/admin")
export class AdminController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private articleService: ArticleService
  ) {
  }
  /*give admin to another user | delete user | add article | ban user for a while | redactor of articles | */

  @UseGuards(JwtAuthGuard)
  @Post("article/create")
  async create(@Body() articleDto: CreateArticleDto, @AuthUser() user: User): Promise<Article> {
    console.log(user)
    return this.articleService.addArticle(articleDto, user)
  }

  @Get("allUsers")
  async getAllUsers() {
    return this.userService.findAll();
  }
}