const User = require("../models/User")
const Product = require("../models/Product")

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLInt,
} = require("graphql");

// Data Object Types

// User
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

// Product
const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    price: { type: GraphQLInt },
    inStock: { type: GraphQLBoolean },
  }),
});

// Queries

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // Query all users
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    // Query all products
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find();
      },
    },
  },
});

// Mutations

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
