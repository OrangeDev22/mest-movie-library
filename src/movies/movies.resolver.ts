import { Query, Resolver } from '@nestjs/graphql';
import { MoviesService } from './movies.service';

@Resolver()
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query(() => String)
  sayHello() {
    return this.moviesService.fetchMovies();
  }
}
