import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MovieType {
  @Field(() => ID)
  id: number;

  @Field()
  adult: boolean;

  @Field()
  backdrop_path: string;

  @Field()
  title: string;

  @Field()
  original_language: string;

  @Field()
  original_title: string;

  @Field()
  overview: string;

  @Field()
  poster_path: string;

  @Field()
  media_type: string;

  @Field(() => [ID])
  genre_ids: number[];

  @Field()
  popularity: number;

  @Field()
  release_date: string;

  @Field()
  video: boolean;

  @Field()
  vote_average: number;

  @Field()
  vote_count: number;
}
