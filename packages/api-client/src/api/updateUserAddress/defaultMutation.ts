import gql from 'graphql-tag';
import { userContactFields } from '../../fragments/userContacts';

export default gql`
${userContactFields}

mutation updateUserAddress($accountId: Int!, $contactId: Int!, $userId: String, $customerContactInput: CustomerContactInput!) {
  updateCustomerAccountContact(accountId: $accountId, contactId: $contactId, userId: $userId, customerContactInput: $customerContactInput) {
    ...userContactFields
  }
}
`;
