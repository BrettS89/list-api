// Initializes the `content/to-do` service on path `/content/to-do`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { ToDo } from './to-do.class';
import createModel from '../../../models/to-do.model';
import hooks from './to-do.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'content/to-do': ToDo & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/content/to-do', new ToDo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('content/to-do');

  service.hooks(hooks);
}
