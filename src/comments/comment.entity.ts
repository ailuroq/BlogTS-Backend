import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "../user/user.entity";
import { Article } from "../article/article.entity";

@Entity()
export class Commentary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  like:number

  @Column()
  dislike:number

  @Column()
  content:string

  @Column({type: 'date'})
  date: Date

  @ManyToOne(() => Article, article => article.comments)
  article: Article;

  @ManyToOne(()=> User, user => user.comments)
  user: User
}
