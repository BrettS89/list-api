import app from '../../../src/app';

describe('\'content/like\' service', () => {
  it('registered the service', () => {
    const service = app.service('content/like');
    expect(service).toBeTruthy();
  });
});
