import gql from 'graphql-tag';

const query = gql`
query($filter: String){
  customerAccounts(filter: $filter) {
      items {
        userId
      	userName
      }
    }
}
`;

export default query;

