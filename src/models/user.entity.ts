import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Post } from "./post.entity";

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

  @OneToMany(() => Post, post => post.user)
  posts: Post[]
}
