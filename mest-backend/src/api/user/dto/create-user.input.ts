import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  auth0Id: string;

  @Field()
  nickName: string;

  @Field()
  name: string;

  @Field()
  email: string;
}
