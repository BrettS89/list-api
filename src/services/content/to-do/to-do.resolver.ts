import { HookContext } from '@feathersjs/feathers';

const resolvers = {
  joins: {
    user: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.user = (
        await app.service('security/user').get(resource.userId)
      );
    },

    likes: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.likes = (
        (await app
          .service('content/like')
          .find({
            query: {
              todoId: resource._id
            },
          })).total
      );
    },

    comments: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.comments = (
        (await app
          .service('content/comment')
          .find({
            query: {
              todoId: resource._id,
              $resolve: { user: true },
            },
          }))
      );
    },

    file: (...args: any) => async (resource: Record<string, any>, { app }: HookContext) => {
      resource.file = !resource.fileId ? null : (
        await app.service('storage/file').get(resource.fileId)
      );
    },

    youLiked: (...args: any) => async (resource: Record<string, any>, { app, params }: HookContext) => {
      resource.youLiked = Boolean((
        await app
          .service('content/like')
          .find({
            query: {
              todoId: resource._id,
              userId: params.user?._id
            }
        })
      ).data[0]);
    },

  }
};

export default resolvers;
