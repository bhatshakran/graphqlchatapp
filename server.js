import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    greet: String
  }
`;

const resolvers = {
  Query: {
    greet: () => "Hello World!",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
