import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { MovieType } from './entities/movie.entity';

@Resolver()
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query(() => [MovieType])
  searchMovie(@Args('search', { type: () => String }) search: string) {
    return this.moviesService.searchMovie(search);
  }
  @Query(() => [MovieType], { name: 'getTrendingMovies' })
  getTrendingMovies() {
    return this.moviesService.getTrendingMovies();
  }
}
