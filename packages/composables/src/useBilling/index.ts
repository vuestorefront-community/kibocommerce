import {
  Context,
  useBillingFactory,
  UseBillingParams
} from '@vue-storefront/core';
import type { BillingAddress } from '@vue-storefront/kibo-api';
import type {
  UseBillingAddParams as AddParams
} from '../types';

// let details = {};

const getOrderId = async (context) => {
  const cartResponse = await context.$kibo.api.getCart();
  const cartId = cartResponse.data?.currentCart?.id;
  if (!cartId) {
    return '';
  }
  const checkoutResponse = await context.$kibo.api.getOrCreateCheckoutFromCart({ cartId });
  return checkoutResponse.data?.order?.id;
};

const params: UseBillingParams<Address, any> = {

  load: async (context: Context, { customQuery }) => {
    const orderId = await getOrderId(context);
    const billingInfoResponse = await context.$kibo.api.getBillingInfo({ orderId }, customQuery);
    return billingInfoResponse.data?.orderBillingInfo?.billingContact;
  },
  save: async (context: Context, { billingDetails, customQuery }) => {
    const orderId = await getOrderId(context);
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
