import { fastJoin } from 'feathers-hooks-common';
import resolvers from './to-do.resolver';
import { authenticate } from '../../../hooks';
import { updateQueryForFriendsTodos } from './hooks';

export default {
  before: {
    all: [authenticate()],
    find: [
      updateQueryForFriendsTodos,
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [fastJoin(resolvers, ctx => ctx.params.resolve || {})],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
