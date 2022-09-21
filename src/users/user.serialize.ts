import { CreateUserDto } from '../auth/dto/createUser.dto';

export class serializeUser {
  email: string;
  constructor(entity: Partial<CreateUserDto>) {
    this.email = entity.email;
  }
}
