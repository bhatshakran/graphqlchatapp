import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User!]!
    user(id: ID!): User!
    messagesByUser(receiverId: Int!): [Message]!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input UserSignupInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  input UserSigninInput {
    email: String!
    password: String!
  }

  scalar Date

  type Message {
    id: ID!
    text: String!
    receiverId: Int!
    senderId: Int!
    createdAt: Date!
  }

  type Mutation {
    signupUser(userinfo: UserSignupInput!): User
    signinUser(signinInfo: UserSigninInput!): Token
    createMessage(receiverId: Int!, text: String!): Message!
  }

  type Token {
    token: String!
  }

  type Subscription {
    messageAdded: Message
  }
`;

export { typeDefs as default };
