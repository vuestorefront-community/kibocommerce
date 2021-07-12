import gql from 'graphql-tag';

const mutation = gql`
mutation login($loginInput:CustomerUserAuthInfoInput!) {
    account:createCustomerAuthTicket(customerUserAuthInfoInput:$loginInput) {
      accessToken
      userId
      refreshToken
      refreshTokenExpiration
      customerAccount {
        id
        firstName
        lastName
        emailAddress
        userName
      }
    }
  }
`;
export default mutation;
