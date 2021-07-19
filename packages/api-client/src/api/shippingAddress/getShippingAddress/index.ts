import { CustomQuery, Context } from '@vue-storefront/core';
import defaultQuery from './defaultQuery';

function buildShippingAddressVars(params) {
  return ({ orderId: params.orderId });
}

export default async function getShippingAddress(context:Context, params, customQuery?: CustomQuery): Promise<any> {

  const defaultVariables = buildShippingAddressVars(params);

  const { shippingAddress } = context.extendQuery(customQuery,
    { shippingAddress: { query: defaultQuery, variables: defaultVariables } }
  );

  const request = await context.client.query({
    query: shippingAddress.query,
    variables: shippingAddress.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
}
