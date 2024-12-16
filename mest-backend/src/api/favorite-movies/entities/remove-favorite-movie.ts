import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RemoveFavoriteMovie {
  @Field(() => Int)
  id: number;
}
