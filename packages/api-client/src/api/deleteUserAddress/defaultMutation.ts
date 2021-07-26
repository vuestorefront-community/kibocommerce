import gql from 'graphql-tag';
import { userContactFields } from '../../fragments/userContacts';

export default gql`
${userContactFields}

mutation deleteUserAddress($accountId: Int!, $contactId: Int!) {
  deleteCustomerAccountContact(accountId: $accountId, contactId: $contactId)
}
`;
