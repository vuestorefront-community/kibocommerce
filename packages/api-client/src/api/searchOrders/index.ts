import { CustomQuery, Context } from '@vue-storefront/core';
import defaultQuery from './defaultQuery';
import { searchOrdersParams, searchOrdersResponse } from '../../types/Api';

export default async function searchOrders(context: Context, params: searchOrdersParams, customQuery?: CustomQuery): Promise<searchOrdersResponse> {
  const variables: {
    filter?: string;
    startIndex?: number;
    pageSize?: number;
  } = {};
  if (params.id) {
    variables.filter = `orderId eq ${params.id}`;
  }
  if (params.page) {
    variables.startIndex = (params.page - 1) * (params.pageSize || 20);
    variables.pageSize = params.pageSize || 20;
  }
  const { orders } = context.extendQuery(customQuery,
    { orders: { query: defaultQuery, variables } }
  );
  const response = await context.client.query({
    query: orders.query,
    variables: orders.variables,
    fetchPolicy: 'no-cache'
  });

  return response;
}
