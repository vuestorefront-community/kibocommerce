import {
  Context,
  useShippingFactory,
  UseShippingParams
} from '@vue-storefront/core';
import type {
  UseShippingAddParams as AddParams,
  Address
} from '../types';

let orderId;

export const getOrderId = async (context) => {
  if (orderId) return orderId;

  const cartResponse = await context.$kibo.api.getCart(null);
  const cartId = cartResponse.data.currentCart.id;

  const checkoutResponse = await context.$kibo.api.getOrCreateCheckoutFromCart({
    cartId: cartId
  });
  orderId = checkoutResponse.data.order.id;

  return orderId;
};

export const params: UseShippingParams<Address, any> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    const cartOrderId = await getOrderId(context);
    const shippingResponce = await context.$kibo.api.getShippingAddress(
      { orderId: cartOrderId },
      customQuery
    );
    const fulfillmentContact =
      shippingResponce.data.orderFulfillmentInfo.fulfillmentContact;

    // Delete __typename
    if (fulfillmentContact) {
      if (fulfillmentContact.__typename) delete fulfillmentContact.__typename;
      if (fulfillmentContact.address.__typename)
        delete fulfillmentContact.address.__typename;
      if (fulfillmentContact.phoneNumbers.__typename)
        delete fulfillmentContact.phoneNumbers.__typename;
    }

    return fulfillmentContact;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { shippingDetails, customQuery }) => {
    if (shippingDetails.isDefault) {
      delete shippingDetails.isDefault;
    }

    const cartOrderId = await getOrderId(context);
    const updateMode = 'ApplyAndCommit';

    const fulfillmentInfoInput = { fulfillmentContact: shippingDetails };

    const shippingResponce = await context.$kibo.api.setShippingAddress(
      {
        orderId: cartOrderId,
        updateMode: updateMode,
        fulfillmentInfoInput: fulfillmentInfoInput
      },
      customQuery
    );
    const updatedAddress =
      shippingResponce.data.updateOrderFulfillmentInfo.fulfillmentContact;

    return { addresses: [updatedAddress] };
  }
};

export const useShipping = useShippingFactory<ShippingAddress, AddParams>(params);
