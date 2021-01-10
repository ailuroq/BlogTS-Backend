import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { User } from "../user/user.entity";
import { Commentary } from "../comments/comment.entity";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100})
  title: string;

  @Column()
  content:string

  @Column()
  numberOfWords: number;

  @Column({type: 'date'})
  date: Date

  @ManyToOne(() => User, user => user.articles)
  user: User;

  @OneToMany(() => Commentary, commentary => commentary.article)
  comments: Commentary[]
}
