import { CreateUserDto } from './dto/createUser.dto';
import { Auth } from './schema/auth.schema';

export class serializeUser {
  email: string;
  constructor(entity: Partial<CreateUserDto>) {
    this.email = entity.email;
  }
}
