import { gql } from "@apollo/client";

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

export { GET_PRODUCTS };
