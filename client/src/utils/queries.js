import { gql } from '@graphql';

export const USERS = gql`
  query allUsers  {
    users{
      _id
      username
      firstName
      lastName
      email
      password
      isAdmin
    }
  }
  `;

  export const PRODUCTS = gql`
   query allProducts  {
    products{
      _id
      title
      descrtiption
      image
      inStock
    }
  }
`;

export const CATEGORIES = gql`
   query allCategories  {
    categories{
      _id
      title
      image
    }
  }
`;