import prismaclient from "@prisma/client";
import { AuthenticationError } from "apollo-server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new prismaclient.PrismaClient();

const resolvers = {
  Query: {
    users: () => users,
    user: (parent, { id }, ctx) => {
      return users.find((user) => {
        return user.id == id;
      });
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
  },
};

export default resolvers;
