import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../auth/auth.guard';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User, { name: 'createUser' })
  @UseGuards(AuthGuard)
  create(
    @Args('createUserInput') createUserInput: CreateUserInput,
    @Context() context: { auth0Id: string },
  ) {
    return this.userService.create(createUserInput as any, context.auth0Id);
  }

  // @Query(() => [User])
  // @UseGuards(AuthGuard)
  // getAllUsers() {
  //   return this.userService.findAll();
  // }

  @Query(() => User)
  @UseGuards(AuthGuard)
  getOneUser(@Context() context: { auth0Id: string }) {
    return this.userService.findOne(context.auth0Id);
  }

  // @Query(() => User)
  // @UseGuards(AuthGuard)
  // getOneByAuth0IdUser(@Args('authId') authId: string) {
  //   return this.userService.findOneByAuth0Id(authId);
  // }

  @Mutation(() => User)
  @UseGuards(AuthGuard)
  updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @Context() context: { auth0Id: string },
  ) {
    return this.userService.update(context.auth0Id, updateUserInput);
  }

  @Mutation(() => User)
  @UseGuards(AuthGuard)
  deleteUser(@Context() context: { auth0Id: string }) {
    return this.userService.remove(context.auth0Id);
  }
}
