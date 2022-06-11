import prismaclient from "@prisma/client";
import { AuthenticationError } from "apollo-server";
import bcrypt from "bcrypt";

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
    createUser: async (_, { userinfo }) => {
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
  },
};

export default resolvers;
