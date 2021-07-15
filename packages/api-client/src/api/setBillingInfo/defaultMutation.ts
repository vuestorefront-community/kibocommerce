import gql from 'graphql-tag';

export default gql`
mutation updateBillingInfo($orderId: String!, $billingInfoInput: BillingInfoInput!) {
    updateOrderBillingInfo(orderId:$orderId, billingInfoInput:$billingInfoInput)
    {
      billingContact {
        id
        firstName
        lastNameOrSurname
        email
        address {
          address1
          address2
          address3
          stateOrProvince
          postalOrZipCode
          cityOrTown
          countryCode
        }
        phoneNumbers{
          home
        }
      }
    }
}
`;
