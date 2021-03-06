import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { CreateArticleDto } from "../article/dto/article-create.dto";
import { Article } from "../article/article.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

    findOne(username: string): Promise<User> {
    return this.userRepository.findOne({ username: username });
  }
  findById(id: any): Promise<User> {
    return this.userRepository.findOne({ id: id });
  }

  create(userDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(userDto);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async addArticle(articleDto:CreateArticleDto, userDto:CreateUserDto):Promise<void>{
    const { id, title, content, numberOfWords, date, userId } = articleDto;
    await this.userRepository.save(articleDto)
  }
  async getArticlesOfUser(username:string): Promise<Article[]> {
    const user = await this.userRepository.findOne({where:{username:username}, relations:['articles']})
    return user.articles
  }
  async getCommentsOfArticle(id: number){}
  /*async getCertainArticle(username:string,id:number):Promise<Article> {
    const user = await this.userRepository.findOne({where:{id:id}, relations:['articles']})
    return user.articles
  }*/
}
