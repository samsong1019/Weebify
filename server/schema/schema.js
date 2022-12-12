const User = require("../models/User");
const Product = require("../models/Product");
const Category = require("../models/Category");

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

// Product
const CategoryType = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    _id: { type: GraphQLID },
    image: { type: GraphQLString },
    title: { type: GraphQLString },
  }),
});

// Queries

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // Query one user by _id
    user: {
      type: UserType,
      args: { _id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args._id);
      },
    },
    // Query all users
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    // Query one product by _id
    product: {
      type: ProductType,
      args: { _id: { type: GraphQLID } },
      resolve(parent, args) {
        return Product.findById(args._id);
      },
    },
    // Query all products
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find();
      },
    },
    // Query one product by _id
    category: {
      type: CategoryType,
      args: { _id: { type: GraphQLID } },
      resolve(parent, args) {
        return Category.findById(args._id);
      },
    },
    // Query all products
    categories: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Category.find();
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
    // Add new product
    addProduct: {
      type: ProductType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLString },
        price: { type: GraphQLNonNull(GraphQLInt) },
        inStock: { type: GraphQLBoolean },
      },
      resolve(parent, args) {
        const product = new Product({
          title: args.title,
          description: args.description,
          image: args.image,
          price: args.price,
          inStock: args.inStock,
        });

        return product.save();
      },
    },
    // Add new product
    addCategory: {
      type: CategoryType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLString },
      },
      resolve(parent, args) {
        const category = new Category({
          title: args.title,
          image: args.image,
        });

        return category.save();
      },
    },
  },
});

// Export
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
