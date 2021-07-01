import {
  Context,
  useUserShippingFactory,
  UseUserShippingFactoryParams
} from '@vue-storefront/core';
import type {
  UserShippingAddress as Address,
  UserShippingAddressItem as AddressItem
} from '@vue-storefront/kibo-api';

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
      stateOrProvince: 'California',
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
      stateOrProvince: 'Nevada',
      postalOrZipCode: '78704',
      countryCode: 'US',
      isValidated: false
    }
  }
];

const shipping = {
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

const params: UseUserShippingFactoryParams<any, any> = {
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

    return Promise.resolve(shipping);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteAddress: async (context: Context, params) => {
    console.log('Mocked: useUserShipping.deleteAddress');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateAddress: async (context: Context, params) => {
    console.log('Mocked: useUserShipping.updateAddress');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, params) => {
    console.log('Mocked: useUserShipping.load');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDefaultAddress: async (context: Context, params) => {
    console.log('Mocked: useUserShipping.setDefaultAddress');
    return {};
  }
};

export const useUserShipping = useUserShippingFactory<Address, AddressItem>(params);
