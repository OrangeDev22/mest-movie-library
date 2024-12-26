import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  nickName: string;

  @Field()
  name: string;

  @Field()
  email: string;
}
