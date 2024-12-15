import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FavoriteMovie {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
