import gql from 'graphql-tag';
import { productInfo } from '../fragments/product';

export default gql`
  ${productInfo}

  query product(
    $productCode: String!
  ) {
    product(
      productCode: $productCode
    ) {
      ...productInfo
    }
  }
`;
