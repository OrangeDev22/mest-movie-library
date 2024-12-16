import { ObjectType, Field, Int, PickType } from '@nestjs/graphql';
import { title } from 'process';
import { MovieType } from 'src/api/movies/entities/movie.entity';

@ObjectType()
export class FavoriteMovie extends PickType(MovieType, [
  'title',
  'poster_path',
]) {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  movieId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
