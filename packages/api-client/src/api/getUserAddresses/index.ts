import { CustomQuery, Context } from '@vue-storefront/core';
import defaultQuery from './defaultQuery';
import { GetUserAddressesParams, GetUserAddressesResponse } from '../../types/Api';

export default async function getUserAddresses(context: Context, params: GetUserAddressesParams, customQuery?: CustomQuery): Promise<GetUserAddressesResponse> {
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
