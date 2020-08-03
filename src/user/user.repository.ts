import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserArgs } from './user.args';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: UserArgs): Promise<User> {
    const { username, password } = authCredentialsDto;

    const user = new User();
    user.username = username;
    user.password = password;

    try {
      await user.save();
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async signIn(authCredentialsDto: UserArgs): Promise<string> {
    const { username, password } = authCredentialsDto;
    const user = await this.findOne({ username });

    if (user && user.password === password) {
      return user.username;
    } else {
      return null;
    }
  }
}
