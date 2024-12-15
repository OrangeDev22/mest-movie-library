import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFavoriteMovieInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

// @InputType()
// export class CreateFavoriteMovieInput {
//   @Field(() => String)
//   title: string;

//   @Field(() => String)
//   genre: string;

//   @Field(() => Int)
//   releaseYear: number;

//   @Field(() => Int)
//   userId: number; // Explicitly include userId in the input
// }
