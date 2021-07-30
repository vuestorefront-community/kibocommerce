import { useShippingFactory, UseShippingParams, Context } from '@vue-storefront/core';
import { Address } from '../types';
import useCart from '../useCart';
import useCheckout from '../useCheckout';

const params: UseShippingParams<Address, any> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

    const cartOrderId = context.checkout?.checkout?.value?.id;
    const shippingResponce = await context.$kibo.api.getShippingAddress({orderId: cartOrderId}, customQuery);
    const fulfillmentContact = shippingResponce.data.orderFulfillmentInfo.fulfillmentContact;

    return fulfillmentContact;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { shippingDetails, customQuery }) => {
    if (!context.checkout?.checkout?.value?.id) {
      await context.checkout.load();
    }

    if (shippingDetails.isDefault) {
      delete shippingDetails.isDefault;
    }

    const cartOrderId = context.checkout?.checkout?.value?.id;
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
