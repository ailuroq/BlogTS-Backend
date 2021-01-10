import { Connection } from "typeorm";
import { ARTICLE_REPOSITORY, COMMENTARY_REPOSITORY, DATABASE_CONNECTION } from "../app.constants";
import { Commentary } from "./comment.entity";

export const commentaryProvider = [
  {
    provide: COMMENTARY_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Commentary),
    inject: [DATABASE_CONNECTION],
  },
]