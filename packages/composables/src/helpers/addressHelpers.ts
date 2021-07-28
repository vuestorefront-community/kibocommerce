import { Context } from '@vue-storefront/core';
import { MutationUpdateCustomerAccountContactArgs } from '@vue-storefront/kibo-api';
import { removeTypename } from '../helpers';

export const loadUserAddresses = async (context, typeName) => {
  const response = await context.$kibo.api.getUserAddresses({
    accountId: context.user.value.id
  });

  return response.data?.customerAccountContacts?.items?.filter(ac => ac.types.some(type => type.name === typeName));
};

export const mapInputToKiboDataFormat = (inputObj, userId, typeName) => ({
  accountId: userId,
  customerContactInput: {
    accountId: userId,
    email: inputObj.email,
    firstName: inputObj.firstName,
    lastNameOrSurname: inputObj.lastName,
    phoneNumbers: {
      home: inputObj.phone
    },
    address: {
      address1: inputObj.streetName,
      address2: inputObj.apartment,
      cityOrTown: inputObj.city,
      stateOrProvince: inputObj.state,
      postalOrZipCode: inputObj.postalCode,
      countryCode: inputObj.country,
      addressType: 'Residential'
    },
    types: [{
      name: typeName,
      isPrimary: inputObj.isDefault
    }]
  }
});

export interface UserAddressContext extends Context {
  user: any;
}

export const addAddress = async (context: UserAddressContext, params: any, typeName: string) => {
  const user = context.user.value;

  params = mapInputToKiboDataFormat(params.address, user.id, typeName);

  await context.$kibo.api.addUserAddress(params);

  return await loadUserAddresses(context, typeName);
};

export const deleteAddress = async (context: UserAddressContext, params: any, typeName: string) => {
  const user = context.user.value;

  await context.$kibo.api.deleteUserAddress({
    accountId: user.id,
    contactId: params.address.id
  });

  return await loadUserAddresses(context, typeName);
};

export const updateAddress = async (context: UserAddressContext, params: any, typeName: string) => {
  const user = context.user.value;

  const addressesResponse = await loadUserAddresses(context, typeName);

  const addressToUpdate = addressesResponse.find(a => a.id === params.address.id);
  if (!addressToUpdate) return Promise.reject('Address not found');

  const updateObj = mapInputToKiboDataFormat(params.address, user.id, typeName) as MutationUpdateCustomerAccountContactArgs;

  updateObj.customerContactInput = Object.assign({}, addressToUpdate, updateObj.customerContactInput);
  updateObj.customerContactInput.types = addressToUpdate.types;
  updateObj.customerContactInput.types.find(t => t.name === typeName).isPrimary = params.address.isDefault;
  updateObj.contactId = params.address.id;
  updateObj.userId = user.userId;

  removeTypename(updateObj);

  await context.$kibo.api.updateUserAddress(updateObj);

  return await loadUserAddresses(context, typeName);
};

export const setDefaultAddress = async (context: UserAddressContext, params: any, typeName: string) => {
  const user = context.user.value;

  const addressesResponse = await loadUserAddresses(context, typeName);

  const addressToUpdate = addressesResponse.find(a => a.id === params.address.id);
  if (!addressToUpdate) return Promise.reject('Address not found');

  addressToUpdate.types.find(t => t.name === typeName).isPrimary = true;
  const updateObj = {
    accountId: user.id,
    contactId: params.address.id,
    customerContactInput: addressToUpdate
  };

  removeTypename(updateObj);

  await context.$kibo.api.updateUserAddress(updateObj);

  return await loadUserAddresses(context, typeName);
};
