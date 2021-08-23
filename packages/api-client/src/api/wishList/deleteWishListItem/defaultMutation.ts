import gql from 'graphql-tag';

const query = gql`
mutation deletewishlistitem($wishlistId: String!, $wishlistItemId: String!) {
    deleteWishlistItem(wishlistId: $wishlistId, wishlistItemId:$wishlistItemId) 
  }
`;

export default query;

