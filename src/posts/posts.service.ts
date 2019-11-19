import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Vote } from './enums/vote.enum';
import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostsService {
    constructor(@Inject('POST_MODEL') private readonly postModel: Model<Post>) {}

    async create(createPostDto: CreatePostDto): Promise<Post> {
        createPostDto.createdDate = Date.now();
        createPostDto.score = createPostDto.createdDate;
        const post = new this.postModel(createPostDto);
        return post.save();
    }

    async findAll(): Promise<Post[]> {
        return await this.postModel.find().exec();
    }

    async delete(id: string) {
        return await this.postModel.findByIdAndRemove(id);
    }

    async vote(id: string, vote: Vote) {
        const post: Post = await this.postModel.findById(id).exec();
        switch (vote) {
        case Vote.Up:
            post.points++;
            break;
        case Vote.Down:
            post.points--;
            break;
        }

        post.score = +post.created_date + post.points * 1000;
        await this.postModel.findByIdAndUpdate(id, post, { new: true });
    }
}
