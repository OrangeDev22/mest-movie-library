import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class MovieClip {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  iso_639_1: string;

  @Field(() => String)
  iso_3166_1: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  key: string;

  @Field(() => String)
  site: string;

  @Field(() => Number)
  size: number;

  @Field(() => String)
  type: string;

  @Field(() => Boolean)
  official: boolean;

  @Field(() => Date, { nullable: true })
  published_at?: Date;
}
