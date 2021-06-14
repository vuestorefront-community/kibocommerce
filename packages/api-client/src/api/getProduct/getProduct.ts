import gql from 'graphql-tag';
import product from '../fragments/product';

export default gql`
  ${product}

  query product(
    $productCode: String!
  ) {
    product(
      productCode: $productCode
    ) {
      ...ProductFields
    }
  }
`;
