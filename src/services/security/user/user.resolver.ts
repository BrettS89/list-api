import { HookContext } from '@feathersjs/feathers';

const resolvers = {
  joins: {
    avatar: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.profile.avatar = !resource.profile?.avatarId ? null : (
        await app.service('storage/file').get(resource.profile.avatarId)
      );
    },
  }
};

export default resolvers;
