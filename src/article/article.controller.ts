import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { UsersService } from "../user/users.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { User } from "../user/user.entity";
import { AuthService } from "../auth/auth.service";
import { CreateArticleDto } from "./dto/article-create.dto";
import { Article } from "./article.entity";
import { ArticleService } from "./article.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { AuthUser } from "../common/decorators/auth-user.decorator";

@Controller('article')
export class ArticleController {
  constructor(
    private authService: AuthService,
    private userService:UsersService,
    private articleService: ArticleService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post("create")
  async create(@Body() articleDto: CreateArticleDto, @AuthUser() user: User): Promise<Article> {
    console.log(user)
    return this.articleService.addArticle(articleDto, user)
  }
}
