import { HookContext } from '@feathersjs/feathers';

const resolvers = {
  joins: {
    user: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.user = (
        await app.service('security/user').get(resource.userId)
      );
    },
  }
};

export default resolvers;
