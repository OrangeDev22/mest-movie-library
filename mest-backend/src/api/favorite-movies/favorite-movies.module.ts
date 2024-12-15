import { Module } from '@nestjs/common';
import { FavoriteMoviesService } from './favorite-movies.service';
import { FavoriteMoviesResolver } from './favorite-movies.resolver';

@Module({
  providers: [FavoriteMoviesResolver, FavoriteMoviesService],
})
export class FavoriteMoviesModule {}
