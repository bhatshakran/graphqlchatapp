import { ApolloServer } from "apollo-server";
import crypto from "crypto";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";

const users = [
  {
    id: 1,
    firstName: "Latrina",
    lastName: "Thys",
    email: "lthys0@independent.co.uk",
    password: "A5m1HgL3Uuwc",
  },
  {
    id: 2,
    firstName: "Adrien",
    lastName: "Brandes",
    email: "abrandes1@tumblr.com",
    password: "9jTBZYnMW",
  },
  {
    id: 3,
    firstName: "Roselle",
    lastName: "Graalman",
    email: "rgraalman2@sina.com.cn",
    password: "lcUYDJE1T",
  },
  {
    id: 4,
    firstName: "Saidee",
    lastName: "Barmadier",
    email: "sbarmadier3@godaddy.com",
    password: "ncezkn9hVS",
  },
  {
    id: 5,
    firstName: "Godwin",
    lastName: "Kermannes",
    email: "gkermannes4@mysql.com",
    password: "ttupgQ",
  },
  {
    id: 6,
    firstName: "Reginald",
    lastName: "Calcraft",
    email: "rcalcraft5@google.com.hk",
    password: "mrBsluE",
  },
  {
    id: 7,
    firstName: "Solomon",
    lastName: "Champniss",
    email: "schampniss6@springer.com",
    password: "hqUH5VOgJtl",
  },
];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
