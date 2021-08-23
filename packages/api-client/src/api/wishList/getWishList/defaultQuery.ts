import gql from 'graphql-tag';
import { wishList } from '../../../fragments/wishlist';
export default gql`
${wishList}

  query {
    wishlists {
        items{
          ...wishList
        }
      }
  }
`;
