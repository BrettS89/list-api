import app from '../src/app';

interface Collection {
  deleteMany({}): Promise<void>
}

beforeEach(async () => {
  const db = app.get('mongooseClient');

  const collections = Object.values(db.models) as Collection[];

  for (const collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  const db = app.get('mongooseClient');
  const mongo = app.get('mongodbMemoryServer');

  await mongo.stop();
  await db.connection.close();
});
