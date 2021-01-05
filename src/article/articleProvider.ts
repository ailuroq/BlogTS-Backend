import { Connection } from "typeorm";
import { Article } from "./article.entity";
import { ARTICLE_REPOSITORY, DATABASE_CONNECTION } from "../app.constants";

export const articleProvider = [
  {
    provide: ARTICLE_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Article),
    inject: [DATABASE_CONNECTION],
  },
]