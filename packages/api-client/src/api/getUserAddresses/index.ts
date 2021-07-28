import { CustomQuery, Context } from '@vue-storefront/core';
import { QueryCustomerAccountContactsArgs } from '../..';
import defaultQuery from './defaultQuery';

export default async function getUserAddresses(context: Context, params: QueryCustomerAccountContactsArgs, customQuery?: CustomQuery): Promise<any> {
  const { userAddresses } = context.extendQuery(customQuery,
    { userAddresses: { query: defaultQuery, variables: params } }
  );
  const response = await context.client.query({
    query: userAddresses.query,
    variables: userAddresses.variables,
    fetchPolicy: 'no-cache'
  });

  return response;
}
