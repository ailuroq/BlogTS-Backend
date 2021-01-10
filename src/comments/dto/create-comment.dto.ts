export class CreateCommentDto {
  readonly id: number
  readonly content: string
  readonly date: Date
  readonly articleId: number
}
