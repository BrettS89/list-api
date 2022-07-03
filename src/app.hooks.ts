// Application hooks that run for every service
// Don't remove this comment. It's needed to format import lines nicely.

import search from 'feathers-mongodb-fuzzy-search';
import { resolve } from './hooks';
import { HookContext } from '@feathersjs/feathers';


export default {
  before: {
    all: [
      resolve,
      search({  // regex search on given fields
        fields: ['profile.firstName', 'profile.lastName', 'profile.username'],
      }),
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [(context: HookContext) => {
      console.log(context.error);
      return context;
    }],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
