import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './module/users.module';
import { RegController } from './controllers/reg.controller';
import { AppController } from './controllers/app.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { Post } from "./models/post.entity";
import { User } from "./models/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'blog',
      entities: [User, Post],
      synchronize: true,
      autoLoadEntities:true
    }),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController, RegController],
  providers: [AppService]
})
export class AppModule {
  constructor(private connection:Connection) {
  }
}
