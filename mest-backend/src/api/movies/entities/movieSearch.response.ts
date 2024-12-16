import { ObjectType, Field, Int } from '@nestjs/graphql';
import { MovieType } from './movie.entity';

@ObjectType()
export class MovieSearchResponse {
  @Field(() => [MovieType])
  movies: MovieType[];

  @Field(() => Int)
  total_pages: number;
}
