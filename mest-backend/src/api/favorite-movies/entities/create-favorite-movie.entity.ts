import { ObjectType, Field, Int, PickType } from '@nestjs/graphql';
import { MovieType } from '../../movies/entities/movie.entity';

@ObjectType()
export class CreateFavoriteMovie extends PickType(MovieType, [
  'title',
  'poster_path',
]) {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  movieId: string;

  @Field(() => String)
  userId;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
