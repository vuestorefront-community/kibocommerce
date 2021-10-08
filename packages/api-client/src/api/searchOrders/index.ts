import { CustomQuery, Context } from '@vue-storefront/core';
import defaultQuery from './defaultQuery';
import { SearchOrdersParams, SearchOrdersResponse } from '../../types/Api';
import { buildSearchOrderVariables } from './_util';

export default async function searchOrders(context: Context, params: SearchOrdersParams, customQuery?: CustomQuery): Promise<SearchOrdersResponse> {

  const variables = buildSearchOrderVariables(params);

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
