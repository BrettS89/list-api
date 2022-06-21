import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Application } from './declarations';
import logger from './logger';

export default function (app: Application) {
  const environment = app.get('environment');

  if(environment === 'test') {
    MongoMemoryServer.create()
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
