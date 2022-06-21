import app from '../../../src/app';

describe('\'communication/notification\' service', () => {
  it('registered the service', () => {
    const service = app.service('communication/notification');
    expect(service).toBeTruthy();
  });
});
