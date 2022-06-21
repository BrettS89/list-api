import { fastJoin } from 'feathers-hooks-common';
import resolvers from './user.resolver';
import { hashPassword } from './hooks';

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      hashPassword,
    ],
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
