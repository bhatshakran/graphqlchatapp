import prismaclient from "@prisma/client";
import { AuthenticationError, ForbiddenError } from "apollo-server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new prismaclient.PrismaClient();

const resolvers = {
  Query: {
    users: async (_, args, { userId }) => {
      if (!userId) throw new ForbiddenError("You must be logged in!");
      const users = await prisma.user.findMany({
        orderBy: {
          createdAt: "desc",
        },
        where: {
          id: {
            not: userId,
          },
        },
      });
      return users;
    },
    user: (parent, { id }, ctx) => {
      return users.find((user) => {
        return user.id == id;
      });
    },
    messagesByUser: async (_, { receiverId }, { userId }) => {
      if (!userId) throw new ForbiddenError("You must be logged in!");
      const messages = await prisma.message.findMany({
        where: {
          OR: [
            { senderId: userId, receiverId },
            { senderId: receiverId, receiverId: userId },
          ],
        },
        orderBy: {
          createdAt: "asc",
        },
      });

      return messages;
    },
  },
  Mutation: {
    signupUser: async (_, { userinfo }) => {
      const userExists = await prisma.user.findUnique({
        where: { email: userinfo.email },
      });
      if (userExists)
        throw new AuthenticationError("User already exists with that email!");
      const hashedPwd = await bcrypt.hash(userinfo.password, 10);
      const newUser = await prisma.user.create({
        data: {
          ...userinfo,
          password: hashedPwd,
        },
      });
      return newUser;
    },

    signinUser: async (_, { signinInfo }) => {
      const userExists = await prisma.user.findUnique({
        where: { email: signinInfo.email },
      });
      if (!userExists)
        throw new AuthenticationError("User does not exist with that email!");
      const pwdMatches = await bcrypt.compare(
        signinInfo.password,
        userExists.password
      );
      if (!pwdMatches)
        throw new AuthenticationError("Email or password is invalid!");
      const token = jwt.sign({ userId: userExists.id }, process.env.JWT_SECRET);

      return { token };
    },
    createMessage: async (_, { receiverId, text }, { userId }) => {
      if (!userId) throw new ForbiddenError("You must be logged in!");
      const message = await prisma.message.create({
        data: {
          text,
          receiverId,
          senderId: userId,
        },
      });

      return message;
    },
  },
};

export default resolvers;
