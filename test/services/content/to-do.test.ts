import app from '../../../src/app';

describe('\'content/to-do\' service', () => {
  it('registered the service', () => {
    const service = app.service('content/to-do');
    expect(service).toBeTruthy();
  });
});
