import { UserBillingGetters } from '@vue-storefront/core';

export const userBillingGetters: UserBillingGetters<any, any> = {
  getAddresses: (billing, criteria?: Record<string, any>) => {
    if (!criteria || !Object.keys(criteria).length) {
      return billing;
    }
    const entries = Object.entries(criteria);
    return billing.filter(
      address => entries.every(([key, value]) => address[key] === value)
    );
  },
  getDefault: billing => billing.find(address => address.types.find(t => t.name === 'Billing').isPrimary),
  getTotal: billing => billing.length,
  getPostCode: address => address ? address.address.postalOrZipCode : '',
  getStreetName: address => address ? address.address.address1 : '',
  getStreetNumber: address => address ? address.address.streetNumber : '',
  getCity: address => address ? address.address.cityOrTown : '',
  getFirstName: address => address ? address.firstName : '',
  getLastName: address => address ? address.lastNameOrSurname : '',
  getCountry: address => address ? address.address.countryCode : '',
  getPhone: address => address ? address.phoneNumbers.home : '',
  getEmail: address => address ? address.email : '',
  getProvince: address => address ? address.address.stateOrProvince : '',
  getCompanyName: address => address ? address.companyOrOrganization : '',
  getTaxNumber: address => address ? address.taxId : '',
  getId: address => address ? address.id : '',
  getApartmentNumber: address => address ? address.address.address2 : '',
  isDefault: address => address ? address.types.find(t => t.name === 'Billing').isPrimary : false
};

export default userBillingGetters;
