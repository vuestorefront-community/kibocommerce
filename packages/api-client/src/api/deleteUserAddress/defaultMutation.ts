import gql from 'graphql-tag';

export default gql`
mutation deleteUserAddress($accountId: Int!, $contactId: Int!) {
  deleteCustomerAccountContact(accountId: $accountId, contactId: $contactId)
}
`;
