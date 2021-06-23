import gql from 'graphql-tag'

const mutation = gql`
mutation login($loginInput:CustomerUserAuthInfo_Input!) {
    account:createCustomerAuthTicket(customerUserAuthInfo_Input:$loginInput) {
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
`
export default mutation