import gql from 'graphql-tag';
import product from '../fragments/product';

export default gql`
  ${product}

  query products(
    $filter: String
    $pageSize: Int
  ) {
    products(
      filter: $filter
      pageSize: $pageSize
    ) {
      items {
        ...ProductFields
      }
    }
  }
`;
