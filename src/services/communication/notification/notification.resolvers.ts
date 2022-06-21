import { HookContext } from '@feathersjs/feathers';

const resolvers = {
  joins: {
    fromUser: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.fromUser = !resource.fromUserId ? null : (
        await app.service('security/user').get(resource.fromUserId, { query: { $resolve: { avatar: true } } })
      );
    },
    todo: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.todo = !resource.todoId ? null : (
        await app.service('content/to-do').get(resource.todoId)
      );
    },
  }
};

export default resolvers;
