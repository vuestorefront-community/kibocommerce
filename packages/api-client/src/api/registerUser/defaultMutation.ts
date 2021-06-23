import gql from 'graphql-tag'

const createAccountAndLoginMutation = gql`
mutation registerUser($inp: CustomerAccountAndAuthInfo_Input!) {
    account:createCustomerAccountAndLogin(customerAccountAndAuthInfo_Input:$inp) {
          customerAccount {
            emailAddress
            userName
            firstName
            lastName
            localeCode
            userId
            isAnonymous
            attributes {
                values
                fullyQualifiedName
            }
      }
      userId
      accessToken
    }
}`

const createAccountMutation = gql`
mutation registerUser($createAccountInput: CustomerAccount_Input!) {
    account:createCustomerAccount(customerAccount_Input:$createAccountInput) {
          emailAddress
          userName
          firstName
          lastName
          localeCode
          userId
          id
          isAnonymous
            attributes {
            values
            fullyQualifiedName
          }
      }
}`

const createAccountLoginMutation = gql`
mutation registerUserLogin($id: Int!, $createAccountLoginInput: CustomerLoginInfo_Input!) {
    account:createCustomerAccountLogin(accountId:$id, customerLoginInfo_Input:$createAccountLoginInput) {
        accessToken
        accessTokenExpiration
        refreshToken
        refreshTokenExpiration
        userId
        customerAccount {
            id
            emailAddress
            firstName
            userName
        }
    }
}`

export default createAccountAndLoginMutation

export {
    createAccountMutation, 
    createAccountLoginMutation
}


