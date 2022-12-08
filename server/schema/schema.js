const User = require("../models/User");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
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

// Export
module.exports = new GraphQLSchema({
  query: RootQuery,
});
