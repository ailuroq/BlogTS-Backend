import { Controller, Get, Param, Post } from "@nestjs/common";

@Controller()
export class CommentController {
  constructor() {
  }
  @Get(":username/:id")
  async showCertainUserArticle(
    @Param("username") username: string,
    @Param("id") id: number
  ) {

  }

  @Post(":username/:id")
  async saveComment(
    @Param("username") username: string,
    @Param("id") id: number
  ) {

  }
}