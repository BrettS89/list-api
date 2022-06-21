import { Hook } from '@feathersjs/feathers';

export const updateQueryForFriendsTodos: Hook = async (context) => {
  let { app, params: { query, user } } = context;

  if (!query?.friends) {
    return context;
  }

  const youAreFollowing = await app.service('security/follow').find({
    query: {
      followerId: user?._id,
      $limit: 1000,
    },
  });

  const followingIds = youAreFollowing.data.map((f: Record<string, any>) => f._id);

  query = {
    ...query,
    userId: { $in: followingIds },
  };

  return context;
};
