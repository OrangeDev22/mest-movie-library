import { Args, ID, Int, Query, Resolver } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { MovieType } from './entities/movie.entity';
import { MovieClip } from './entities/movieClip.entity';
import { CastMember } from './entities/castMember';
import { MovieResponseType } from './entities/movie.response';

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

  @Query(() => MovieResponseType)
  getOneMmovie(@Args('id', { type: () => ID }) id: number) {
    return this.moviesService.getOneMovie(id);
  }

  @Query(() => [MovieType])
  getSimilarMovies(@Args('id', { type: () => ID }) id: number) {
    return this.moviesService.getSimilarMovies(id);
  }

  @Query(() => [MovieType], { name: 'getTopTrendingMovies' })
  getTopTrendingMovies() {
    return this.moviesService.getTopTrendingMovies();
  }
  @Query(() => [MovieClip], { name: 'getMovieClips' })
  getMovieClips(@Args('id', { type: () => ID }) id: number) {
    return this.moviesService.getMovieCLip(id);
  }

  @Query(() => [CastMember], { name: 'getMovieCast' })
  getMovieCast(@Args('id', { type: () => Int }) id: number) {
    return this.moviesService.getMovieCast(id);
  }
}
