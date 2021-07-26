import gql from 'graphql-tag';
import { cartDetails } from '../../../fragments';

export default gql`
${cartDetails}

query cart {
  currentCart {
    ...cartDetails
  }
}
`;
