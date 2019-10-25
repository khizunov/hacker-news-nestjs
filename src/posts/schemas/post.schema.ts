import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    created_date: {
        type: Date,
        default: Date.now,
    },
    points: {
        type: Number,
        default: 0,
    },
    content: {
        type: String,
    },
    sourceUrl: {
        type: String,
    },
    score: {
        type: Number,
        default: 0,
    },
});
