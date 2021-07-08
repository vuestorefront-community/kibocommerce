import gql from 'graphql-tag';
import cartDetails from '../../fragments/cartDetails';

export default gql`
${cartDetails}

query cart {
  currentCart {
    ...cartDetails
  }
}
`;
