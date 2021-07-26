import gql from 'graphql-tag';
import { userContactFields } from '../../fragments/userContacts';

export default gql`
${userContactFields}

query getUserAddresses($accountId: Int!, $startIndex: Int, $pageSize: Int) {
  customerAccountContacts(accountId: $accountId, startIndex: $startIndex, pageSize: $pageSize) {
    pageCount
    totalCount
    items {
      ...userContactFields
    }
  }
}
`;
