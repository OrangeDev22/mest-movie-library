import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFavoriteMovieInput {
  @Field(() => String)
  movieId: string;
}
