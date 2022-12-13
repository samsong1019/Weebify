import { gql } from '@grapghql';

export const ADD_USER = gql`
  mutation addUser($username: String!, $firstName: String!, $lastName: String! $email: String!, $password: String!, $isAdmin:Boolean! ) {
    addProfile(username: $username, firstName: $firstName, lastname: $lastName, email: $email, password: $password, isAdmin: $isAdmin) {
      token
      profile {
        _id
        name
      }
    }
  }
  `;
  export const ADD_PRODUCT = gql`
  mutation addProduct($title: String!, $description: String!, $price: Number, $image: String!, $instock: Boolean) {
    addProducts(title: $title, description: $description, price: $price, image: $image, inStock: $inStock) {
      _id
      title
      description
      price
      image
      inStock
    }
  }
`;

export const ADD_CATEGORY = gql`
mutation addCategory($title: String!,  $image: String!) {
  addProducts(title: $title, image: $image) {
    _id
    title
    image
  }
}
`;
