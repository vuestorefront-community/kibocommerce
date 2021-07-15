import gql from 'graphql-tag';

export default gql`
  mutation changeCustomerAccountPassword(
    $accountId: Int!
    $unlockAccount: Boolean
    $userId: String
    $passwordInfoInput: PasswordInfoInput
  ) {
    user:changeCustomerAccountPassword(
      accountId: $accountId
      unlockAccount: $unlockAccount
      userId: $userId
      passwordInfoInput: $passwordInfoInput
    )
  }
`;
