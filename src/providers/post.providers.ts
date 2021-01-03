import { Connection } from "typeorm";
import { Post } from "../models/post.entity";
import { DATABASE_CONNECTION, POST_REPOSITORY } from "../app.constants";

export const postProviders = [
  {
    provide: POST_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Post),
    inject: [DATABASE_CONNECTION],
  },
]