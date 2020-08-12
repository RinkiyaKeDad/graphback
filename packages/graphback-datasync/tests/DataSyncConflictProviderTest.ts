/* eslint-disable max-lines */
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient, Db } from 'mongodb';
import { buildSchema } from 'graphql';
import { GraphbackCoreMetadata } from '@graphback/core';
import { SchemaCRUDPlugin } from "@graphback/codegen-schema";
import { createDataSyncConflictProviderCreator, DataSyncPlugin, ConflictError, DataSyncFieldNames, DataSyncModelConfigMap, DataSyncProvider, ServerSideWins } from '../src';

export interface Context {
  providers: { [modelname: string]: DataSyncProvider };
  server: MongoMemoryServer,
  db: Db
}

export async function createTestingContext(schemaStr: string, config?: { seedData?: { [collection: string]: any[] }, conflictConfigMap?: DataSyncModelConfigMap }): Promise<Context> {
  // Setup graphback
  const schema = buildSchema(schemaStr);

  const server = new MongoMemoryServer();
  const client = new MongoClient(await server.getConnectionString(), { useUnifiedTopology: true });
  await client.connect();
  const db = client.db('test');

  const defautConfig = {
    "create": true,
    "update": true,
    "findOne": true,
    "find": true,
    "delete": true,
    "subCreate": true,
    "subUpdate": true,
    "subDelete": true
  }

  const schemaGenerator = new SchemaCRUDPlugin();
  const DataSyncGenerator = new DataSyncPlugin({ modelConfigMap: config?.conflictConfigMap || {}});
  const metadata = new GraphbackCoreMetadata({
    crudMethods: defautConfig
  }, schema)
  metadata.setSchema(schemaGenerator.transformSchema(metadata));
  metadata.setSchema(DataSyncGenerator.transformSchema(metadata));

  const createProvider = createDataSyncConflictProviderCreator(db, config?.conflictConfigMap);

  const providers: { [name: string]: DataSyncProvider } = {}
  const models = metadata.getModelDefinitions();
  for (const model of models) {
    providers[model.graphqlType.name] = createProvider(model) as DataSyncProvider;
  }

  // if seed data is supplied, insert it into collections
  if (config?.seedData) {
    const collectionNames = Object.keys(config.seedData);
    for (const collectionName of collectionNames) {
      for (const element of config.seedData[collectionName]) {
        await providers[collectionName].create(element, {graphback: {services: {}, options: { selectedFields: ["_id"]}}});
      }
    };
  }

  return { server, providers, db }
}


describe('Client Side wins Conflict resolution', () => {
  let context: Context;
  afterEach(async () => context.server.stop());
  const fields = ["_id", "title"];
  const postSchema = `
  """
  @model
  @datasync
  """
  type Post {
    _id: GraphbackObjectID!
    title: String!
    content: String
  }

  scalar GraphbackObjectID
  `;

  it ('updates successfully when correct version passed', async () => {
    context = await createTestingContext(postSchema, { conflictConfigMap: { Post: { enabled: true } } });

    const { Post } = context.providers;

    const { _id, [DataSyncFieldNames.version]: version } = await Post.create({ title: "Post 1", content: "Post 1 content" }, {graphback: {services: {}, options: { selectedFields: ["_id", DataSyncFieldNames.version]}}});

    const updateTitle = "Post 1 v2";
    const { title, [DataSyncFieldNames.version]: updatedVersion } = await Post.update({ _id, title: updateTitle, [DataSyncFieldNames.version]: version },{graphback: {services: {}, options: { selectedFields: [...fields, DataSyncFieldNames.version] }}})

    expect(title).toEqual(updateTitle);
    expect(updatedVersion).toEqual(version + 1);
  });

  it ('client data wins when conflict occurs', async () => {
    context = await createTestingContext(postSchema, { conflictConfigMap: { Post: { enabled: true } } });

    const { Post } = context.providers;

    const { _id, [DataSyncFieldNames.version]: version } = await Post.create({ title: "Post 1", content: "Post 1 content" }, {graphback: {services: {}, options: { selectedFields: ["_id", DataSyncFieldNames.version]}}});

    await Post.update({ _id, title: "Post 1 v2", [DataSyncFieldNames.version]: version },{graphback: {services: {}, options: { selectedFields: fields}}})

    const finalUpdateTitle = "Post 1 v3";
    const updatedPost = await Post.update({ _id, title: finalUpdateTitle, [DataSyncFieldNames.version]: version },{graphback: {services: {}, options: { selectedFields: fields}}});

    expect(updatedPost.title).toEqual(finalUpdateTitle);
  });

  it('restore document on update when server-side deleted', async () => {
    context = await createTestingContext(postSchema, { conflictConfigMap: { Post: { enabled: true } } });

    const { Post } = context.providers;

    const { _id, [DataSyncFieldNames.version]: version } = await Post.create({ title: "Post 1", content: "Post 1 content" }, {graphback: {services: {}, options: { selectedFields: ["_id", DataSyncFieldNames.version]}}});

    await Post.delete({ _id, [DataSyncFieldNames.version]: version }, {graphback: {services: {}, options: { selectedFields: fields}}});

    const updatedTitle = "Post 1 v2";
    const updatedPost = await Post.update({ _id, title: updatedTitle,  [DataSyncFieldNames.version]: version }, {graphback: {services: {}, options: { selectedFields: [...fields, DataSyncFieldNames.deleted]}}})

    expect(updatedPost.title).toEqual(updatedTitle);
    expect(updatedPost[DataSyncFieldNames.deleted]).toEqual(false);
  });

  it ('merges changes when no conflict', async () => {
    context = await createTestingContext(postSchema, { conflictConfigMap: { Post: { enabled: true } } });

    const { Post } = context.providers;

    const { _id, [DataSyncFieldNames.version]: version } = await Post.create({ title: "Post 1", content: "Post 1 content" }, {graphback: {services: {}, options: { selectedFields: ["_id", DataSyncFieldNames.version]}}});

    const updatedContent = "Post 1 content v2";
    await Post.update({ _id, content: updatedContent, [DataSyncFieldNames.version]: version },{graphback: {services: {}, options: { selectedFields: fields}}})

    const updateTitle = "Post 1 v2";
    const updatedPost = await Post.update({ _id, title: updateTitle, [DataSyncFieldNames.version]: version },{graphback: {services: {}, options: { selectedFields: fields}}});

    expect(updatedPost.title).toEqual(updateTitle);
    expect(updatedPost.content).toEqual(updatedContent);
  });

  it ('throw error on deletes if conflict occurs', async () => {
    context = await createTestingContext(postSchema, { conflictConfigMap: { Post: { enabled: true } } });

    const { Post } = context.providers;

    const { _id, [DataSyncFieldNames.version]: version } = await Post.create({ title: "Post 1", content: "Post 1 content" }, {graphback: {services: {}, options: { selectedFields: ["_id", DataSyncFieldNames.version]}}});

    const updatedTitle = "Post 1 v2";
    await Post.update({ _id, title: updatedTitle,  [DataSyncFieldNames.version]: version }, {graphback: {services: {}, options: { selectedFields: [...fields, DataSyncFieldNames.deleted]}}})

    await expect(Post.delete({ _id, [DataSyncFieldNames.version]: version }, {graphback: {services: {}, options: { selectedFields: fields}}})).rejects.toThrowError(ConflictError);
  });
});

describe('Server Side wins Conflict resolution', () => {
  let context: Context;
  afterEach(async () => context.server.stop());
  const fields = ["_id", "title"];
  const postSchema = `
  """
  @model
  @datasync
  """
  type Post {
    _id: GraphbackObjectID!
    title: String!
    content: String
  }

  scalar GraphbackObjectID
  `;

  it ('updates successfully when correct version passed', async () => {
    context = await createTestingContext(postSchema, { conflictConfigMap: { Post: { enabled: true, conflictResolution: ServerSideWins } } });

    const { Post } = context.providers;

    const { _id, [DataSyncFieldNames.version]: version } = await Post.create({ title: "Post 1", content: "Post 1 content" }, {graphback: {services: {}, options: { selectedFields: ["_id", DataSyncFieldNames.version]}}});

    const updateTitle = "Post 1 v2";
    const { title, [DataSyncFieldNames.version]: updatedVersion } = await Post.update({ _id, title: updateTitle, [DataSyncFieldNames.version]: version },{graphback: {services: {}, options: { selectedFields: [...fields, DataSyncFieldNames.version] }}})

    expect(title).toEqual(updateTitle);
    expect(updatedVersion).toEqual(version + 1);
  });

  it ('server data wins when conflict occurs', async () => {
    context = await createTestingContext(postSchema, { conflictConfigMap: { Post: { enabled: true, conflictResolution: ServerSideWins } } });

    const { Post } = context.providers;

    const { _id, [DataSyncFieldNames.version]: version } = await Post.create({ title: "Post 1", content: "Post 1 content" }, {graphback: {services: {}, options: { selectedFields: ["_id", DataSyncFieldNames.version]}}});

    const updateTitle = "Post 1 v2";
    await Post.update({ _id, title: updateTitle, [DataSyncFieldNames.version]: version },{graphback: {services: {}, options: { selectedFields: fields}}})

    const finalUpdateTitle = "Post 1 v3";
    const updatedPost = await Post.update({ _id, title: finalUpdateTitle, [DataSyncFieldNames.version]: version },{graphback: {services: {}, options: { selectedFields: fields}}});

    expect(updatedPost.title).toEqual(updateTitle);
  });

  it('throws error on update when server-side deleted', async () => {
    context = await createTestingContext(postSchema, { conflictConfigMap: { Post: { enabled: true, conflictResolution: ServerSideWins } } });

    const { Post } = context.providers;

    const { _id, [DataSyncFieldNames.version]: version } = await Post.create({ title: "Post 1", content: "Post 1 content" }, {graphback: {services: {}, options: { selectedFields: ["_id", DataSyncFieldNames.version]}}});

    await Post.delete({ _id, [DataSyncFieldNames.version]: version }, {graphback: {services: {}, options: { selectedFields: fields}}});

    const updatedTitle = "Post 1 v2";
    await expect(Post.update({ _id, title: updatedTitle,  [DataSyncFieldNames.version]: version }, {graphback: {services: {}, options: { selectedFields: [...fields, DataSyncFieldNames.deleted]}}})).rejects.toThrowError(ConflictError);
  });

  it ('merges changes when no conflict', async () => {
    context = await createTestingContext(postSchema, { conflictConfigMap: { Post: { enabled: true, conflictResolution: ServerSideWins } } });

    const { Post } = context.providers;

    const { _id, [DataSyncFieldNames.version]: version } = await Post.create({ title: "Post 1", content: "Post 1 content" }, {graphback: {services: {}, options: { selectedFields: ["_id", DataSyncFieldNames.version]}}});

    const updatedContent = "Post 1 content v2";
    await Post.update({ _id, content: updatedContent, [DataSyncFieldNames.version]: version },{graphback: {services: {}, options: { selectedFields: fields}}})

    const updateTitle = "Post 1 v2";
    const updatedPost = await Post.update({ _id, title: updateTitle, [DataSyncFieldNames.version]: version },{graphback: {services: {}, options: { selectedFields: fields}}});

    expect(updatedPost.title).toEqual(updateTitle);
    expect(updatedPost.content).toEqual(updatedContent);
  });

  it ('throw error on deletes if conflict occurs', async () => {
    context = await createTestingContext(postSchema, { conflictConfigMap: { Post: { enabled: true, conflictResolution: ServerSideWins } } });

    const { Post } = context.providers;

    const { _id, [DataSyncFieldNames.version]: version } = await Post.create({ title: "Post 1", content: "Post 1 content" }, {graphback: {services: {}, options: { selectedFields: ["_id", DataSyncFieldNames.version]}}});

    const updatedTitle = "Post 1 v2";
    await Post.update({ _id, title: updatedTitle,  [DataSyncFieldNames.version]: version }, {graphback: {services: {}, options: { selectedFields: [...fields, DataSyncFieldNames.deleted]}}})

    await expect(Post.delete({ _id, [DataSyncFieldNames.version]: version }, {graphback: {services: {}, options: { selectedFields: fields}}})).rejects.toThrowError(ConflictError);
  });
});