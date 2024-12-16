import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CreateFavoriteMovie {
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
