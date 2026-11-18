import { createClient } from 'redis';

// Active document database configuration.
export const documentStore = {
  kind: 'mongodb',
  connectionString: process.env.MONGODB_URI
};

// Active cache configuration.
export const cacheClient = createClient({ url: process.env.REDIS_URL });

// COMMENT-ONLY: no relational database client is configured or used.
// export const relationalStore = new Sequelize(process.env.SQL_DATABASE_URL);

// COMMENT-ONLY: no vector database client is configured or used.
// export const vectorStore = new PineconeClient({ apiKey: process.env.VECTOR_API_KEY });
