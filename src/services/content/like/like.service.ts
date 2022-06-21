// Initializes the `content/like` service on path `/content/like`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Like } from './like.class';
import createModel from '../../../models/like.model';
import hooks from './like.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'content/like': Like & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/content/like', new Like(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('content/like');

  service.hooks(hooks);
}
