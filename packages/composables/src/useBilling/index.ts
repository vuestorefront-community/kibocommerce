import { useBillingFactory, UseBillingParams, Context } from '@vue-storefront/core';
import { Address } from '../types';
import useCart from '../useCart';
import useCheckout from '../useCheckout';

const params: UseBillingParams<Address, any> = {
  provide() {
    return {
      cart: useCart(),
      checkout: useCheckout()
    };
  },
  load: async (context: Context, { customQuery }) => {
    if (!context.checkout?.checkout?.value?.id) {
      await context.checkout.load();
    }
    const orderId = context.checkout?.checkout?.value?.id;
    const billingInfoResponse = await context.$kibo.api.getBillingInfo({ orderId }, customQuery);
    return billingInfoResponse.data?.orderBillingInfo?.billingContact;
  },
  save: async (context: Context, { billingDetails, customQuery }) => {
    if (!context.checkout?.checkout?.value?.id) {
      await context.checkout.load();
    }
    const orderId = context.checkout?.checkout?.value?.id;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { sameAsShipping, isDefault, ...billingContact } = billingDetails;
    const setBillingParams = {
      orderId,
      billingInfoInput: {
        billingContact,
        isSameBillingShippingAddress: sameAsShipping || false
      }
    };
    const billingInfoResponse = await context.$kibo.api.setBillingInfo(setBillingParams, customQuery);
    const billingInfo = billingInfoResponse.data?.updateOrderBillingInfo?.billingContact;
    return billingInfo;
  }
};

export const useBilling = useBillingFactory<BillingAddress, AddParams>(params);
