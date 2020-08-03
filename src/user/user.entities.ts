import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserGraphql {
  @Field(() => String)
  id: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}
