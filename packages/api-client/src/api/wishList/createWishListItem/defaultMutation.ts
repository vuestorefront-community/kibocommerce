import gql from 'graphql-tag';

const query = gql`
  mutation createWishlistItem(
    $wishlistId: String!
    $wishlistItemInput: WishlistItemInput
  ) {
    createWishlistItem(
      wishlistId: $wishlistId
      wishlistItemInput: $wishlistItemInput
    ) {
      id
      quantity
      product {
        productCode
        name
        description
        imageUrl
        options {
          attributeFQN
          name
          value
        }
        price {
          price
          salePrice
        }
      }
    }
  }
`;

export default query;
