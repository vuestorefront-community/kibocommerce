import {
  useUserBillingFactory,
  UseUserBillingFactoryParams
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

const typeName = 'Billing';

const params: UseUserBillingFactoryParams<any, any> = {
  provide() {
    return useUser();
  },
  addAddress: async (context: UserAddressContext, params: any) => {
    return await addAddress(context, params, typeName);
  },

  deleteAddress: async (context: UserAddressContext, params?: any) => {
    return await deleteAddress(context, params, typeName);
  },

  updateAddress: async (context: UserAddressContext, params?: any) => {
    return await updateAddress(context, params, typeName);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: UserAddressContext, params?: any) => {
    return await loadUserAddresses(context, typeName);
  },

  setDefaultAddress: async (context: UserAddressContext, params?: any) => {
    return await setDefaultAddress(context, params, typeName);
  }
};

export const useUserBilling = useUserBillingFactory<any, any>(params);
