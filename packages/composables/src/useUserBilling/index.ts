import {
  Context,
  useUserBillingFactory,
  UseUserBillingFactoryParams
} from '@vue-storefront/core';
import type {
  UserBillingAddress as Address,
  UserBillingAddressItem as AddressItem
} from '@vue-storefront/<% INTEGRATION %>-api';

const addresses: any[] = [
  {
    id: 1,
    isDefault: true,
    firstName: 'Sushant',
    lastNameOrSurname: 'Jadhav',
    phoneNumbers: {
      home: '1234560000'
    },
    address: {
      address1: 'address1 - Street name',
      address2: 'address2 - Apartment Number',
      addressType: 'Residential',
      cityOrTown: 'city - Austin',
      stateOrProvince: 'state - TX',
      postalOrZipCode: '78704',
      countryCode: 'US',
      isValidated: false
    }
  },
  {
    id: 2,
    isDefault: false,
    firstName: 'Sushant',
    lastNameOrSurname: 'V Jadhav',
    phoneNumbers: {
      home: '987654321'
    },
    address: {
      address1: '123 main st',
      address2: 'Apt 123',
      addressType: 'Residential',
      cityOrTown: 'Austin',
      stateOrProvince: 'TX',
      postalOrZipCode: '78704',
      countryCode: 'US',
      isValidated: false
    }
  }
];

const billing = {
  addresses
};

const findBiggestId = () => addresses.reduce((highest, { id }) => Math.max(highest, id), 0);

const disableOldDefault = () => {
  const oldDefault = addresses.find(address => address.isDefault);
  if (oldDefault) {
    oldDefault.isDefault = false;
  }
};

const sortDefaultAtTop = (a, b) => {
  if (a.isDefault) {
    return -1;
  } else if (b.isDefault) {
    return 1;
  }
  return 0;
};

const params: UseUserBillingFactoryParams<any, any> = {
  addAddress: async (context: Context, params?) => {
    console.log('Mocked: addAddress', params.address);

    const newAddress = {
      ...params.address,
      id: findBiggestId() + 1
    };

    if (params.address.isDefault) {
      disableOldDefault();
      addresses.unshift(newAddress);
    } else {
      addresses.push(newAddress);
    }

    return Promise.resolve(billing);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteAddress: async (context: Context, params) => {
    console.log('Mocked: useUserBilling.deleteAddress');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateAddress: async (context: Context, params) => {
    console.log('Mocked: useUserBilling.updateAddress');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, params) => {
    console.log('Mocked: useUserBilling.load');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDefaultAddress: async (context: Context, params) => {
    console.log('Mocked: useUserBilling.setDefaultAddress');
    return {};
  }
};

export const useUserBilling = useUserBillingFactory<Address, AddressItem>(params);
