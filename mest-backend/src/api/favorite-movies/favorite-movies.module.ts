import { Module } from '@nestjs/common';
import { FavoriteMoviesService } from './favorite-movies.service';
import { FavoriteMoviesResolver } from './favorite-movies.resolver';
import { MoviesService } from '../movies/movies.service';
import { MoviesModule } from '../movies/movies.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [
    FavoriteMoviesResolver,
    FavoriteMoviesService,
    MoviesService,
    MoviesModule,
  ],
})
export class FavoriteMoviesModule {}
