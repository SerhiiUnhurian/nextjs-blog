import { MongoClient } from 'mongodb';

const url =
  'mongodb+srv://nextjs-blog-user:a3KLVdDtgjM8otoe@cluster0.4v8ry.mongodb.net/nextjs-blog?retryWrites=true&w=majority';

export async function connectDatabase() {
  const client = await MongoClient.connect(url);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function findDocuments(
  client,
  collention,
  queryFilter = {},
  sortFilter = {}
) {
  const db = client.db();
  const documents = await db
    .collection(collention)
    .find(queryFilter)
    .sort(sortFilter)
    .toArray();

  return documents;
}
