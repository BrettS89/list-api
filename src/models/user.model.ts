// security/user-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'security/user';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    email: {
      type: String,
      required: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      username: {
        type: String,
      },
      avatarId: {
        type: Schema.Types.ObjectId,
        ref: 'storage/file',
      },
    }
  }, {
    timestamps: true,
    
  });

  schema.index({ 'profile.firstName': 'text', 'profile.lastName': 'text', 'profile.username': 'text' }, { name: 'user text index' });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
