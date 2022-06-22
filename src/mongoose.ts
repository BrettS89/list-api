import mongoose from 'mongoose';
import { Application } from './declarations';
import logger from './logger';

export default function (app: Application) {
  const environment = app.get('environment');

  if(environment === 'test') {
    // to avoid crash in raspberry pi arm environment
    const { MongoMemoryServer } = require('mongodb-memory-server');

    MongoMemoryServer.create()
      // @ts-ignore
      .then((mongod: MongoMemoryServer) => {
        const uri = mongod.getUri();
        app.set('mongodbMemoryServer', mongod);
        return mongoose.connect(uri);
      })
      .catch((err: Error) => {
        logger.error(err);
        process.exit(1);
      });
  } else {
    mongoose.connect(app.get('mongodb')).catch(err => {
      logger.error(err);
      process.exit(1);
    });
  }

  app.set('mongooseClient', mongoose);
}
