import { CustomQuery, Context } from '@vue-storefront/core';
import defaultQuery from './defaultQuery';

export default async function searchOrders(context: Context, _, customQuery?: CustomQuery): Promise<any> {
  const { orders } = context.extendQuery(customQuery,
    { orders: { query: defaultQuery } }
  );
  const response = await context.client.query({
    query: orders.query,
    fetchPolicy: 'no-cache'
  });

  return response;
}
