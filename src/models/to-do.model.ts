// content/to-do-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'content/to-do';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'security/user',
      required: true,
      index: true,
    },
    body: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    public: {
      type: Boolean,
      default: false,
    },
    fileId: {
      type: Schema.Types.ObjectId,
      ref: 'storage/file',
    },
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
