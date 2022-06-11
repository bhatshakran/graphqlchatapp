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
    createUser: (_, { newUser }) => {
      const user = {
        id: crypto.randomUUID(),
        ...newUser,
      };
      users.push(user);

      return user;
    },
  },
};

export default resolvers;
