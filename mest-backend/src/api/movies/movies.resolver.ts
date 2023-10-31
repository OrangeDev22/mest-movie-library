import { Args, ID, Int, Query, Resolver } from '@nestjs/graphql';
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
  getTrendingMovies(@Args('page', { type: () => Number }) page: number) {
    return this.moviesService.getTrendingMovies(page);
  }

  @Query(() => MovieType)
  getOneMmovie(@Args('id', { type: () => ID }) id: number) {
    return this.moviesService.getOneMovie(id);
  }

  @Query(() => [MovieType])
  getSimilarMovies(@Args('id', { type: () => ID }) id: number) {
    return this.moviesService.getSimilarMovies(id);
  }
}
