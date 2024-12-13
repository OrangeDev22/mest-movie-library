import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User, { name: 'createUser' })
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput as any);
  }

  @Query(() => [User])
  getAllUsers() {
    return this.userService.findAll();
  }

  @Query(() => User)
  getOneUser(@Args('id') id: number) {
    return this.userService.findOne(id);
  }

  @Query(() => User)
  getOneByAuth0IdUser(@Args('authId') authId: string) {
    return this.userService.findOneByAuth0Id(authId);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  deleteUser(@Args('id') id: number) {
    return this.userService.remove(id);
  }
}
