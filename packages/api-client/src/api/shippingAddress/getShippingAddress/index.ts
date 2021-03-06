import { CustomQuery, Context } from '@vue-storefront/core';
import defaultQuery from './defaultQuery';
import { GetShippingAddressParams, GetShippingAddressResponse} from '../../../types/Api';

function buildShippingAddressVars(params) {
  return ({ orderId: params.orderId });
}

export default async function getShippingAddress(context:Context, params:GetShippingAddressParams, customQuery?: CustomQuery): Promise<GetShippingAddressResponse> {

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
