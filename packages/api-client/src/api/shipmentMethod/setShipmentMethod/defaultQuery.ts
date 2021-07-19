import gql from 'graphql-tag';

const query = gql`
  mutation setShipmentMethod(
    $orderId: String!,
    $updateMode: String
    $fulfillmentInfoInput: FulfillmentInfoInput){
    updateOrderFulfillmentInfo(
      orderId: $orderId
      updateMode: $updateMode
      fulfillmentInfoInput: $fulfillmentInfoInput
    ){
      fulfillmentContact {
        id
        email
        firstName
        middleNameOrInitial
        lastNameOrSurname
        companyOrOrganization
        phoneNumbers {
          home
        }
        address {
          address1
          address2
          addressType
          cityOrTown
          countryCode
          isValidated
          postalOrZipCode
          stateOrProvince
        },
      }
    }
  }
`;

export default query;

