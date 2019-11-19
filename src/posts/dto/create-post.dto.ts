import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  readonly content: string;
  @IsNotEmpty()
  readonly sourceUrl: string;
  createdDate: number;
  score: number;
}
