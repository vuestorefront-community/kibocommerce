import {
  Context,
  useUserOrderFactory,
  UseUserOrderFactoryParams
} from '@vue-storefront/core';
import type { Order } from '@vue-storefront/kibo-api';
import type {
  useUserOrderSearchParams as SearchParams
} from '../types';

export const params: UseUserOrderFactoryParams<OrdersResponse, OrderSearchParams> = {
  searchOrders: async (context: Context, params: OrderSearchParams): Promise<any> => {
    const { customQuery, ...searchParams } = params || { customQuery: {} };

    const orders = (await context.$kibo.api.searchOrders(searchParams, customQuery)).data?.orders;

    if (orders)
      return orders.items;

    return [];
  }
};

export const useUserOrder = useUserOrderFactory<Order, SearchParams>(params);
