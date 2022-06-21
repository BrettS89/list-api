import { Paginated } from '@feathersjs/feathers';
import app from '../../../src/app';

describe('\'data/tag\' service', () => {
  it('registered the service', () => {
    const service = app.service('data/tag');
    expect(service).toBeTruthy();
  });

  it('creates a resource', async () => {
    const service = app.service('security/user');
    const followService = app.service('security/follow');

    const  user = await service.create({
      email: 'test',
      password: 'test',
      profile: {
        firstName: 'brett',
        lastName: 'sodie',
        username: 'brett',
      }
    });

    const follow = await followService.create({
      followerId: user._id,
      followeeId: user._id,
    });

    const resolved = await followService.find({
      query: {
        $resolve: {
          followee: true,
        },
      },
    }) as Paginated<any>;

    expect(user._id.toString()).toBe(follow.followeeId.toString());
  });
});
