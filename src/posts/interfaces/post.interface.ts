import { Document } from 'mongoose';

export interface Post extends Document {
  readonly created_date: Date;
  points: number;
  readonly content: string;
  readonly sourceUrl: string;
  score: number;
}
