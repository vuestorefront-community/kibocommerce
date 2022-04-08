import gql from 'graphql-tag';

const loginMutation = gql`
  mutation login($loginInput: CustomerUserAuthInfoInput!) {
    account: createCustomerAuthTicket(customerUserAuthInfoInput: $loginInput) {
      customerAccount {
        id
        userId
        firstName
        lastName
        emailAddress
        userName
        isAnonymous
      }
      accessToken
      accessTokenExpiration
      refreshToken
      refreshTokenExpiration
      userId
      jwtAccessToken
    }
  }
`;
export default loginMutation;
