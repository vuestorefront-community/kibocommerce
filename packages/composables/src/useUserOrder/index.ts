import {
  Context,
  useUserOrderFactory,
  UseUserOrderFactoryParams
} from '@vue-storefront/core';
import type { Order } from '@vue-storefront/kibocommerce-api';
import type { 
  OrdersResponse, 
  OrderSearchParams 
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

export const useUserOrder = useUserOrderFactory<OrdersResponse, OrderSearchParams>(params);
