import { HookContext } from '@feathersjs/feathers';

const resolvers = {
  joins: {
    follower: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.follower = (
        await app.service('security/user').get(resource.followerId)
      );
    },

    followee: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.followee = (
        await app.service('security/user').get(resource.followeeId)
      );
    },
  }
};

export default resolvers;
