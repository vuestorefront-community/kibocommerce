import gql from 'graphql-tag';

export default gql`
fragment fullfillmentInfoFields on FulfillmentInfo {
  shippingMethodCode 
  shippingMethodName
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
`;
