import gql from 'graphql-tag';

export default gql`
query getOrderBillingInfo($orderId: String!) {
    orderBillingInfo(orderId:$orderId) { 
      data
      paymentType
      paymentWorkflow
      isSameBillingShippingAddress
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
        phoneNumbers {
          home
          mobile
          work
        }
      }
      card {
        paymentOrCardType
        expireYear
        expireMonth
        nameOnCard
        cardNumberPartOrMask
        isTokenized
        isCardInfoSaved
      }
      check {
        checkNumber
      }
    }
  }
`;
