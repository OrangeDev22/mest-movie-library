import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FavoriteMovie {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  movieId: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  genre: string;

  @Field(() => Int)
  releaseYear: number;

  @Field(() => String)
  auth0Id;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
