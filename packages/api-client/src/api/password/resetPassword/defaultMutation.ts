import gql from 'graphql-tag';

const query = gql`
  mutation resetPassword($resetPasswordInfoInput: ResetPasswordInfoInput){
    resetPassword:resetCustomerAccountPassword(resetPasswordInfoInput: $resetPasswordInfoInput)
  }
`;

export default query;

