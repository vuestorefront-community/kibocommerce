import gql from 'graphql-tag';

const query = gql`
query SearchOrderFulfillmentInfo($orderId: String!){
  orderFulfillmentInfo(orderId: $orderId) {
    fulfillmentContact {
      address {
        address1,
        address2,
        addressType,
        cityOrTown,
        countryCode,
        isValidated,
        postalOrZipCode,
        stateOrProvince
      },
      companyOrOrganization,
      email,
      firstName,
      id,
      lastNameOrSurname,
      middleNameOrInitial,
      phoneNumbers {
        home
      }
    }
  }
}`;

export default query;

