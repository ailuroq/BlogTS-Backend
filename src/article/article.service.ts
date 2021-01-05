import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user/user.entity";
import { Article } from "./article.entity";
import { CreateArticleDto } from "./dto/article-create.dto";

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Article)
    private articleRepository: Repository<Article>
  ) {}

  findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  findOne(id: string): Promise<Article | undefined> {
    return this.articleRepository.findOne(id);
  }

  create(articleDto: CreateArticleDto): Promise<Article> {
    return this.articleRepository.save(articleDto);
  }
  async remove(id: number): Promise<void> {
    await this.articleRepository.delete(id);
  }

  async addArticle(articleDto: CreateArticleDto, user: any): Promise<Article> {
    const { id, title, content, numberOfWords, date, userId } = articleDto;
    const article = new Article();
    article.id = id
    article.title = title;
    article.content = content;
    article.numberOfWords = numberOfWords;
    article.date = date;
    article.user = user;
    await this.articleRepository.save(article);
    return article;
  }

  async getAllArticles(): Promise<Article[]> {
    return this.articleRepository.find()
  }
}
