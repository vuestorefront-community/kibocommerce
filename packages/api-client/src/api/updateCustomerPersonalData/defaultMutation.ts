import gql from 'graphql-tag';

export default gql`
  mutation updateCustomerData(
    $accountId: Int!
    $customerAccountInput: CustomerAccountInput
  ) {
    user: updateCustomerAccount(
      accountId: $accountId
      customerAccountInput: $customerAccountInput
    ) {
      emailAddress
      firstName
      lastName
    }
  }
`;
