// Initializes the `security/follow` service on path `/security/follow`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Follow } from './follow.class';
import createModel from '../../../models/follow.model';
import hooks from './follow.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'security/follow': Follow & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/security/follow', new Follow(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('security/follow');

  service.hooks(hooks);
}
