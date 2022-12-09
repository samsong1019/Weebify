const User = require("../models/User");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: { type: GraphQLID },
    username: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    // Add new user
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLNonNull(GraphQLString) },
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        isAdmin: { type: GraphQLNonNull(GraphQLBoolean) },
      },
      resolve(parent, args) {
        const user = new User({
          username: args.username,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
          isAdmin: args.isAdmin,
        });

        return user.save();
      },
    },
  },
});

// Export
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
