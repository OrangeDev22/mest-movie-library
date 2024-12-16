import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { FavoriteMoviesService } from './favorite-movies.service';
import { FavoriteMovie } from './entities/favorite-movie.entity';
import { CreateFavoriteMovieInput } from './dto/create-favorite-movie.input';
import { UpdateFavoriteMovieInput } from './dto/update-favorite-movie.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateFavoriteMovie } from './entities/create-favorite-movie.entity';

@Resolver(() => FavoriteMovie)
export class FavoriteMoviesResolver {
  constructor(private readonly favoriteMoviesService: FavoriteMoviesService) {}

  @UseGuards(AuthGuard)
  @Mutation(() => CreateFavoriteMovie)
  createFavoriteMovie(
    @Args('createFavoriteMovieInput')
    createFavoriteMovieInput: CreateFavoriteMovieInput,
    @Context() context: { auth0Id: string },
  ) {
    return this.favoriteMoviesService.create(
      createFavoriteMovieInput,
      context.auth0Id,
    );
  }

  @Query(() => [FavoriteMovie], { name: 'favoriteMovies' })
  findAll() {
    return this.favoriteMoviesService.findAll();
  }

  @Query(() => FavoriteMovie, { name: 'favoriteMovie' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.favoriteMoviesService.findOne(id);
  }

  @Mutation(() => FavoriteMovie)
  updateFavoriteMovie(
    @Args('updateFavoriteMovieInput')
    updateFavoriteMovieInput: UpdateFavoriteMovieInput,
  ) {
    return this.favoriteMoviesService.update(
      updateFavoriteMovieInput.id,
      updateFavoriteMovieInput,
    );
  }

  @Mutation(() => FavoriteMovie)
  removeFavoriteMovie(@Args('id', { type: () => Int }) id: number) {
    return this.favoriteMoviesService.remove(id);
  }
}
