import {
  useUserShippingFactory,
  UseUserShippingFactoryParams
} from '@vue-storefront/core';
import { useUser } from '../useUser';
import {
  UserAddressContext,
  loadUserAddresses,
  addAddress,
  deleteAddress,
  updateAddress,
  setDefaultAddress
} from '../helpers/addressHelpers';

const typeName = 'Shipping';

const params: UseUserShippingFactoryParams<any, any> = {
  provide() {
    return useUser();
  },
  addAddress: async (context: UserAddressContext, params: any) => {
    return await addAddress(context, params, typeName);
  },

  deleteAddress: async (context: UserAddressContext, params?) => {
    return await deleteAddress(context, params, typeName);
  },

  updateAddress: async (context: UserAddressContext, params?) => {
    return await updateAddress(context, params, typeName);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: UserAddressContext, params?) => {
    return await loadUserAddresses(context, typeName);
  },

  setDefaultAddress: async (context: UserAddressContext, params?) => {
    return await setDefaultAddress(context, params, typeName);
  }
};

export const useUserShipping = useUserShippingFactory<any, any>(params);
