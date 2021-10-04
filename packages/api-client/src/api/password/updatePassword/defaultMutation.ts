import gql from 'graphql-tag';

const query = gql`
 mutation updatePassword($confirmationInfoInput: ConfirmationInfoInput){
  updatePassword:updateForgottenCustomerAccountPassword (confirmationInfoInput: $confirmationInfoInput )
}
`;

export default query;

