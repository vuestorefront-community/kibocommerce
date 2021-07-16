import gql from 'graphql-tag';

export default gql`
query {
  orders {
    pageCount
    items {
      auditInfo {
        createDate
      }
      id
      orderNumber
      status
      total
      items {
        product {
          productCode
          name
        }
        quantity
        total
      }
    }
  }
}
`;
