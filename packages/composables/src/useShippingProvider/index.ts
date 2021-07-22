import { useShippingProviderFactory, UseShippingProviderParams, Context } from '@vue-storefront/core';
import type { ShippingProvider, ShippingMethod } from '@vue-storefront/kibo-api';

const orderShipmentMethods = [
  {
    shippingMethodCode: 'd77e1a876e3a47718a1ca58a008c7b49',
    shippingMethodName: 'Custom Flat Rate',
    shippingZoneCode: 'United States',
    isValid: true,
    messages: [],
    data: null,
    currencyCode: 'USD',
    price: 15
  },
  {
    shippingMethodCode: 'd77e1a876e3a47718a1ca58a008c7b50',
    shippingMethodName: 'Custom Flat Rate 1',
    shippingZoneCode: 'United States',
    isValid: true,
    messages: [],
    data: null,
    currencyCode: 'USD',
    price: 20
  }
];

let orderId;

const getOrderId = async (context) =>{
  if (orderId) return orderId;
  if (localStorage.getItem('orderId')) return localStorage.getItem('orderId');

  const cartResponse = await context.$kibo.api.getCart(null);
  const cartId = cartResponse.data.currentCart.id;

  const checkoutResponse = await context.$kibo.api.getOrCreateCheckoutFromCart({ cartId: cartId});
  orderId = checkoutResponse.data.order.id;

  return orderId;
};

const getShippingAddress = async (orderId, context) =>{

  const shippingResponce = await context.$kibo.api.getShippingAddress({orderId: orderId});
  const shippingAddress = shippingResponce.data.orderFulfillmentInfo.fulfillmentContact;

  return shippingAddress;
};

const params: UseShippingProviderParams<Shipping, ShippingMethod> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery, state }) => {
    const orderId = await getOrderId(context);

    const shippingMethodsResponse = await context.$kibo.api.getShipmentMethod({orderId: orderId});
    const shippingMethods = shippingMethodsResponse.data.orderShipmentMethods;

    return {
      response: shippingMethods.length > 0 ? shippingMethods : orderShipmentMethods
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { shippingMethod, customQuery }) => {

    const orderId = await getOrderId(context);
    const fulfillmentContact = await getShippingAddress(orderId, context);

    // Delete __typename
    if (fulfillmentContact) {
      if (fulfillmentContact.__typename) delete fulfillmentContact.__typename;
      if (fulfillmentContact.address.__typename) delete fulfillmentContact.address.__typename;
      if (fulfillmentContact.phoneNumbers.__typename) delete fulfillmentContact.phoneNumbers.__typename;
    }

    const fulfillmentInfoInput = {
      shippingMethodCode: shippingMethod.shippingMethodCode,
      shippingMethodName: shippingMethod.shippingMethodName,
      fulfillmentContact: fulfillmentContact
    };

    // Save shipmentgMethod
    const shipmentMethodsResponse = await context.$kibo.api.setShipmentMethod({orderId: orderId, fulfillmentInfoInput: fulfillmentInfoInput});
    const shipmentgMethod = shipmentMethodsResponse.data.updateOrderFulfillmentInfo;

    return shipmentgMethod;
  }
};

export const useShippingProvider = useShippingProviderFactory<ShippingProvider, ShippingMethod>(params);
