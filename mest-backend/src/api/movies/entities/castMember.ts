import { Field, ObjectType, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class CastMember {
  @Field(() => Boolean)
  adult: boolean;

  @Field(() => Int)
  gender: number;

  @Field(() => Int)
  id: number;

  @Field()
  known_for_department: string;

  @Field()
  name: string;

  @Field()
  original_name: string;

  @Field(() => Float)
  popularity: number;

  @Field({ nullable: true })
  profile_path?: string;

  @Field(() => Int)
  cast_id: number;

  @Field()
  character: string;

  @Field()
  credit_id: string;

  @Field(() => Int)
  order: number;

  @Field({ nullable: true })
  job: string;
}
