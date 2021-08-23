import gql from 'graphql-tag';
import { wishList } from '../../../fragments/wishlist';
const query = gql`
${wishList}

mutation createWishlist($wishlistInput:WishlistInput!) {
    createWishlist(wishlistInput:$wishlistInput){
      ...wishList
    }
  }
`;

export default query;

