import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  {
    categories {
      _id
      title
      image
    }
  }
`;

export { GET_CATEGORIES };
