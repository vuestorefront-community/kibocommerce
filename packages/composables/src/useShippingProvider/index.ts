import { useShippingProviderFactory, UseShippingProviderParams, Context } from '@vue-storefront/core';
import { Shipping, ShippingMethod } from '../types';
import { FulfillmentInfoInput } from '@vue-storefront/kibo-api/lib/types/GraphQL';
import useCheckout from '../useCheckout';

const getShippingAddress = async (orderId, context) =>{

  const shippingResponce = await context.$kibo.api.getShippingAddress({orderId: orderId});
  const shippingAddress = shippingResponce.data.orderFulfillmentInfo.fulfillmentContact;

  return shippingAddress;
};

const params: UseShippingProviderParams<Shipping, ShippingMethod> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  provide() {
    return {
      order: useCheckout()
    };
  },

  load: async (context: Context) => {
    const orderId = context.order.checkout.value.id;

    const shippingMethodsResponse = await context.$kibo.api.getShipmentMethod({orderId: orderId});
    const shippingMethods = shippingMethodsResponse.data.orderShipmentMethods;

    return {
      response: shippingMethods
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { shippingMethod, customQuery }) => {

    const orderId = context.order.checkout.value.id;
    const fulfillmentContact = await getShippingAddress(orderId, context);

    // Delete __typename
    if (fulfillmentContact) {
      if (fulfillmentContact.__typename) delete fulfillmentContact.__typename;
      if (fulfillmentContact.address.__typename) delete fulfillmentContact.address.__typename;
      if (fulfillmentContact.phoneNumbers.__typename) delete fulfillmentContact.phoneNumbers.__typename;
    }

    const fulfillmentInfoInput: FulfillmentInfoInput = {
      shippingMethodCode: shippingMethod.shippingMethodCode as string,
      shippingMethodName: shippingMethod.shippingMethodName as string,
      fulfillmentContact: fulfillmentContact
    };

    // Save shipmentgMethod
    const shipmentMethodsResponse = await context.$kibo.api.setShipmentMethod({orderId: orderId, fulfillmentInfoInput: fulfillmentInfoInput});
    const shipmentgMethod = shipmentMethodsResponse.data.updateOrderFulfillmentInfo;

    return shipmentgMethod;
  }
};

export const useShippingProvider = useShippingProviderFactory<ShippingProvider, ShippingMethod>(params);
