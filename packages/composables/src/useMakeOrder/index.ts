import {
  Context,
  useMakeOrderFactory,
  UseMakeOrderFactoryParams
} from '@vue-storefront/core';
import type { Order } from '@vue-storefront/kibo-api';

let orderId;

const getOrderId = async (context) =>{
  if (orderId) return orderId;

  const cartResponse = await context.$kibo.api.getCart(null);
  const cartId = cartResponse.data.currentCart.id;

  const checkoutResponse = await context.$kibo.api.getOrCreateCheckoutFromCart({ cartId: cartId});
  orderId = checkoutResponse.data.order.id;

  return orderId;
};

const factoryParams = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  make: async (context: Context, { customQuery }): Promise<Order> => {

    const orderId = await getOrderId(context);

    const orderResponse = await context.$kibo.api.makeOrder({orderId: orderId});
    const order = orderResponse.data.createOrderAction;

    return {
      id: order.orderNumber
    };
  }
};

export const useMakeOrder = useMakeOrderFactory<Order>(factoryParams);
