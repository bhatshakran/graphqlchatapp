import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import resolvers from './resolvers.js';
import typeDefs from './typeDefs.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const port = process.env.PORT || 4000;

// Create the schema, which will be used separately by ApolloServer and
// the WebSocket server.
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Create an Express app and HTTP server; we will attach both the WebSocket
// server and the ApolloServer to this HTTP server.
const app = express();

const context = ({ req }) => {
  const { authorization } = req.headers;
  if (authorization) {
    const { userId } = jwt.verify(authorization, process.env.JWT_SECRET);

    return { userId };
  }
};

// Set up ApolloServer.
const apolloServer = new ApolloServer({
  schema,
  context,
});

await apolloServer.start();

apolloServer.applyMiddleware({ app, path: '/graphql' });

app.use(
  cors({
    origin: [
      'https://chatterweb.netlify.app/',
      'https://graphqlchatapp.vercel.app/',
    ],
  })
);

const server = app.listen(process.env.PORT, () => {
  const wsServer = new WebSocketServer({
    server,
    path: '/graphql',
  });
  useServer({ schema }, wsServer);
  console.log('Apollo and sub server running!');
});
