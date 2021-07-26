import { CustomQuery, Context } from '@vue-storefront/core';
import { QueryCustomerAccountContactsArgs } from '../..';
import defaultQuery from './defaultQuery';

export default async function getUserAddresses(context: Context, params: QueryCustomerAccountContactsArgs, customQuery?: CustomQuery): Promise<any> {
  const { orders } = context.extendQuery(customQuery,
    { orders: { query: defaultQuery, variables: params } }
  );
  const response = await context.client.query({
    query: orders.query,
    variables: orders.variables,
    fetchPolicy: 'no-cache'
  });

  return response;
}
