import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { userDocument } from 'src/users/schema/user.schema';

export const GetUser = createParamDecorator(
  (key: string, ctx: ExecutionContext): userDocument | any => {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user;
    return key ? user?.[key] : user;
  },
);
