import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class UserArgs {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}
