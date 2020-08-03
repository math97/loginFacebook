import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserGraphql } from './user.entities';
import { UserArgs } from './user.args';
import { User } from './user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @Query(() => UserGraphql)
  signIn(@Args() args: UserArgs): Promise<string> {
    return this.service.signIn(args);
  }
  @Mutation(() => UserGraphql)
  signUp(@Args() args: UserArgs): Promise<UserGraphql> {
    return this.service.signUp(args);
  }
}
