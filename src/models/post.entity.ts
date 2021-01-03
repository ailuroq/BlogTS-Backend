import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100})
  title: string;

  @Column()
  numberOfWords: number;

  @Column({type: 'date'})
  date: Date

  @ManyToOne(() => User, user => user.posts)
  user: User;
}
