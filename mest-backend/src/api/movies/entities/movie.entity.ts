import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MovieType {
  @Field(() => ID)
  id: number;

  @Field()
  adult: boolean;

  @Field({ defaultValue: '' })
  backdrop_path: string;

  @Field({ defaultValue: '' })
  title: string;

  @Field({ defaultValue: '' })
  original_language: string;

  @Field({ defaultValue: '' })
  original_title: string;

  @Field({ defaultValue: '' })
  overview: string;

  @Field()
  poster_path: string;

  @Field({ defaultValue: '' })
  media_type: string;

  @Field(() => [ID], { nullable: true })
  genre_ids: number[];

  @Field({ nullable: true })
  popularity?: number;

  @Field({ nullable: true })
  release_date?: string;

  @Field({ defaultValue: false })
  video: boolean;

  @Field({ defaultValue: 0 })
  vote_average: number;

  @Field({ defaultValue: 0 })
  vote_count: number;
}
