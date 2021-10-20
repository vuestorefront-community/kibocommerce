import { sharedRef } from '@vue-storefront/core';

export const usePaymentProviderMock = (): any => {
  const status = sharedRef(false, 'usePaymentProviderMock-status');

  return {
    status,
  };
};
