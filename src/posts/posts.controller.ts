import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { VoteDto } from './dto/vote.dto';
import { Post as PostModel } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    this.postsService.create(createPostDto);
  }

  @Get()
  async findAll(): Promise<PostModel[]> {
    return this.postsService.findAll();
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.postsService.delete(id);
  }

  @Post(':id')
  async vote(@Param('id') id: string, @Body() voteDto: VoteDto) {
    await this.postsService.vote(id, voteDto.vote);
  }
}
