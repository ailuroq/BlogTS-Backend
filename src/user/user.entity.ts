import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Article } from "../article/article.entity";
import { Commentary } from "../comments/comment.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ length: 50 })
  email: string;

  @Column()
  password: string;

  @Column()
  isAdmin: boolean;

  @OneToMany(() => Article, article => article.user)
  articles: Article[];

  @OneToMany(() => Commentary, comment => comment.user)
  comments: Commentary[];

}
