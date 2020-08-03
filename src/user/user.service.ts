import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserArgs } from './user.args';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(args: UserArgs): Promise<User> {
    return await this.userRepository.signUp(args);
  }

  async signIn(args: UserArgs): Promise<string> {
    const username = await this.userRepository.signIn(args);

    if (!username) throw new UnauthorizedException('Invalid credentials');

    return 'logado';
  }
}
