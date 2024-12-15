import { CreateFavoriteMovieInput } from './create-favorite-movie.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFavoriteMovieInput extends PartialType(CreateFavoriteMovieInput) {
  @Field(() => Int)
  id: number;
}
