import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FavoriteMovie {
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
