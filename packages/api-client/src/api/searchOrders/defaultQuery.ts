import gql from 'graphql-tag';

export default gql`
query ($filter: String, $startIndex: Int, $pageSize: Int){
  orders(filter: $filter, startIndex: $startIndex, pageSize: $pageSize) {
    pageCount
    items {
      submittedDate
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
