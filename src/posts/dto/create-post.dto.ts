export interface CreatePostDto {
  readonly content: string;
  readonly sourceUrl: string;
  createdDate: number;
  score: number;
}
