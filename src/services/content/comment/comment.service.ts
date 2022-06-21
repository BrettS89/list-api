// Initializes the `content/comment` service on path `/content/comment`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Comment } from './comment.class';
import createModel from '../../../models/comment.model';
import hooks from './comment.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'content/comment': Comment & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/content/comment', new Comment(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('content/comment');

  service.hooks(hooks);
}
