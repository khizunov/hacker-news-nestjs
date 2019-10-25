import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { MongoModule } from '../databases/mongo/mongo.module';
import { postsProviders } from './posts.providers';

@Module({
  imports: [MongoModule],
  controllers: [PostsController],
  providers: [PostsService, ...postsProviders],
})
export class PostsModule {}
