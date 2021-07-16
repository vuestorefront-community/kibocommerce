import {
  Context,
  useShippingFactory,
  UseShippingParams
} from '@vue-storefront/core';
import type { ShippingAddress } from '@vue-storefront/kibo-api';
import type {
  UseShippingAddParams as AddParams
} from '../types';

let orderId;

const getOrderId = async (context) =>{
  if (orderId) return orderId;

  const cartResponse = await context.$kibo.api.getCart(null);
  const cartId = cartResponse.data.currentCart.id;

  const checkoutResponse = await context.$kibo.api.getOrCreateCheckoutFromCart({ cartId: cartId});
  orderId = checkoutResponse.data.order.id;
  return orderId;
};

const params: UseShippingParams<Address, any> = {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    const cartOrderId = await getOrderId(context);
    const shippingResponce = await context.$kibo.api.getShippingAddress({orderId: cartOrderId}, customQuery);
    const fulfillmentContact = shippingResponce.data.orderFulfillmentInfo.fulfillmentContact;
    return fulfillmentContact ? ({addresses: [fulfillmentContact]}) : null;

  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { shippingDetails, customQuery }) => {

    const cartOrderId = await getOrderId(context);
    const updateMode = 'ApplyAndCommit';
    const fulfillmentInfoInput = {fulfillmentContact: shippingDetails};

    const shippingResponce = await context.$kibo.api.setShippingAddress({orderId: cartOrderId, updateMode: updateMode, fulfillmentInfoInput: fulfillmentInfoInput}, customQuery);
    const updatedAddress = shippingResponce.data.updateOrderFulfillmentInfo.fulfillmentContact;

    return ({addresses: [updatedAddress]});
  }
};

export const useShipping = useShippingFactory<ShippingAddress, AddParams>(params);
