import { Document } from 'mongoose';

export interface Post extends Document {
    readonly created_date: Date;
    readonly points: number;
    readonly content: string;
    readonly sourceUrl: string;
    readonly score: number;
}
