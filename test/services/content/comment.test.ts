import app from '../../../src/app';

describe('\'content/comment\' service', () => {
  it('registered the service', () => {
    const service = app.service('content/comment');
    expect(service).toBeTruthy();
  });
});
