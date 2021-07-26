import gql from 'graphql-tag';
import { userContactFields } from '../../fragments/userContacts';

export default gql`
${userContactFields}

mutation addUserAddress($accountId: Int!, $customerContactInput: CustomerContactInput!) {
  createCustomerAccountContact(accountId: $accountId, customerContactInput: $customerContactInput) {
    ...userContactFields
  }
}
`;
