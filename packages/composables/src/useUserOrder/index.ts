import {
  Context,
  useUserOrderFactory,
  UseUserOrderFactoryParams
} from '@vue-storefront/core';
import type { Order } from '@vue-storefront/kibo-api';
import type {
  useUserOrderSearchParams as SearchParams
} from '../types';

const params: UseUserOrderFactoryParams<OrdersResponse, OrderSearchParams> = {
  searchOrders: async (context: Context): Promise<any> => {
    const orders = (await context.$kibo.api.searchOrders()).data?.orders;

    if (orders) return orders.items;

    return [];
  }
};

export const useUserOrder = useUserOrderFactory<Order, SearchParams>(params);
