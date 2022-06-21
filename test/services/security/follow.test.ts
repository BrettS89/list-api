import app from '../../../src/app';

describe('\'security/follow\' service', () => {
  it('registered the service', () => {
    const service = app.service('security/follow');
    expect(service).toBeTruthy();
  });
});
