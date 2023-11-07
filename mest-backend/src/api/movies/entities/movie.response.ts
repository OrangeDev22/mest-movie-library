import { Field, ID, ObjectType, PickType } from '@nestjs/graphql';
import { MovieType } from './movie.entity';
@ObjectType()
class ProductionCompany {
  @Field(() => ID)
  id: number;
  @Field(() => String)
  name: string;
}

@ObjectType()
class Genre {
  @Field(() => ID)
  id: number;

  @Field()
  name: String;
}

@ObjectType()
export class MovieResponseType extends PickType(MovieType, [
  'adult',
  'backdrop_path',
  'genre_ids',
  'id',
  'media_type',
  'original_language',
  'original_title',
  'overview',
  'popularity',
  'poster_path',
  'release_date',
  'title',
  'video',
  'vote_average',
  'vote_count',
]) {
  @Field(() => [Genre], { nullable: true })
  genres: Genre[];

  @Field(() => [ProductionCompany], { nullable: true })
  production_companies: ProductionCompany[];
}
