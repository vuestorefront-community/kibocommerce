import gql from 'graphql-tag';
import { productInfo } from '../../fragments';

export default gql`
  ${productInfo}

  query products(
    $filter: String
    $pageSize: Int
  ) {
    products(
      filter: $filter
      pageSize: $pageSize
    ) {
      items {
        ...productInfo
      }
    }
  }
`;
