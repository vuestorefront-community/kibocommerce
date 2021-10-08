/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Context } from '@vue-storefront/core';
import { MutationUpdateCustomerAccountContactArgs } from '@vue-storefront/kibocommerce-api';
import { removeTypename } from '../helpers';

export interface UserAddressContext extends Context {
  user: any;
}

export const loadUserAddresses = async (
  context: UserAddressContext,
  typeName: string
): Promise<any[]> => {
  const response = await context.$kibo.api.getUserAddresses({
    accountId: context.user.value.id,
  });

  return response.data?.customerAccountContacts?.items?.filter(
    (ac: { types: any[] }) =>
      ac.types.some((type: { name: string }) => type.name === typeName)
  );
};

export const mapInputToKiboDataFormat = (
  inputObj: {
    email: any;
    firstName: any;
    lastName: any;
    phone: any;
    streetName: any;
    apartment: any;
    city: any;
    state: any;
    postalCode: any;
    country: any;
    isDefault: any;
  },
  userId: string,
  typeName: string
): any => ({
  accountId: userId,
  customerContactInput: {
    accountId: userId,
    email: inputObj.email,
    firstName: inputObj.firstName,
    lastNameOrSurname: inputObj.lastName,
    phoneNumbers: {
      home: inputObj.phone,
    },
    address: {
      address1: inputObj.streetName,
      address2: inputObj.apartment,
      cityOrTown: inputObj.city,
      stateOrProvince: inputObj.state,
      postalOrZipCode: inputObj.postalCode,
      countryCode: inputObj.country,
      addressType: 'Residential',
    },
    types: [
      {
        name: typeName,
        isPrimary: inputObj.isDefault,
      },
    ],
  },
});

export const addAddress = async (
  context: UserAddressContext,
  params: any,
  typeName: string
): Promise<any> => {
  const user = context.user.value;

  params = mapInputToKiboDataFormat(params.address, user.id, typeName);

  await context.$kibo.api.addUserAddress(params);

  return await loadUserAddresses(context, typeName);
};

export const deleteAddress = async (
  context: UserAddressContext,
  params: any,
  typeName: string
): Promise<any> => {
  const user = context.user.value;

  await context.$kibo.api.deleteUserAddress({
    accountId: user.id,
    contactId: params.address.id,
  });

  return await loadUserAddresses(context, typeName);
};

export const updateAddress = async (
  context: UserAddressContext,
  params: any,
  typeName: string
): Promise<any> => {
  const user = context.user.value;

  const addressesResponse = await loadUserAddresses(context, typeName);

  const addressToUpdate = addressesResponse.find(
    (a) => a.id === params.address.id
  );
  if (!addressToUpdate) return Promise.reject('Address not found');

  const updateObj = mapInputToKiboDataFormat(
    params.address,
    user.id,
    typeName
  ) as MutationUpdateCustomerAccountContactArgs;

  updateObj.customerContactInput = Object.assign(
    {},
    addressToUpdate,
    updateObj.customerContactInput
  );
  updateObj.customerContactInput.types = addressToUpdate.types;
  updateObj.customerContactInput.types.find(
    (t: { name: string }) => t.name === typeName
  ).isPrimary = params.address.isDefault;
  updateObj.contactId = params.address.id;
  updateObj.userId = user.userId;

  removeTypename(updateObj);

  await context.$kibo.api.updateUserAddress(updateObj);

  return await loadUserAddresses(context, typeName);
};

export const setDefaultAddress = async (
  context: UserAddressContext,
  params: any,
  typeName: string
): Promise<any> => {
  const user = context.user.value;

  const addressesResponse = await loadUserAddresses(context, typeName);

  const addressToUpdate = addressesResponse.find(
    (a) => a.id === params.address.id
  );
  if (!addressToUpdate) return Promise.reject('Address not found');

  addressToUpdate.types.find(
    (t: { name: string }) => t.name === typeName
  ).isPrimary = true;
  const updateObj = {
    accountId: user.id,
    contactId: params.address.id,
    customerContactInput: addressToUpdate,
  };

  removeTypename(updateObj as any);

  await context.$kibo.api.updateUserAddress(updateObj);

  return await loadUserAddresses(context, typeName);
};
