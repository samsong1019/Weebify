import { gql } from "@apollo/client";

const GET_PRODUCT = gql`
  {
    product {
      title
      description
      image
      price
      inStock
    }
  }
`;

const GET_PRODUCTS = gql`
  {
    products {
      title
      description
      image
      price
      inStock
    }
  }
`;

export { GET_PRODUCT, GET_PRODUCTS };
