import { Order } from '../types';
import { UseMakeOrder, useMakeOrderFactory, Context } from '@vue-storefront/core';
import { useCheckout } from '../useCheckout';

const factoryParams = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  provide() {
    return {
      order: useCheckout()
    };
  },
  make: async (context: Context): Promise<Order> => {
    const orderId = context.order.checkout.value.id;

    const orderResponse = await context.$kibo.api.makeOrder({orderId: orderId});
    const order = orderResponse.data.createOrderAction;

    return {
      id: order.orderNumber
    };
  }
};

export const useMakeOrder = useMakeOrderFactory<Order>(factoryParams);
