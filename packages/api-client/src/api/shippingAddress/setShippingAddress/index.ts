import { CustomQuery, Context } from '@vue-storefront/core';
import defaultQuery from './defaultQuery';

function buildShippingAddressVars(params) {
  return ({ orderId: params.orderId, updateMode: params.updateMode, fulfillmentInfoInput: params.fulfillmentInfoInput });
}

export default async function setShippingAddress(context:Context, params, customQuery?: CustomQuery): Promise<any> {

  const defaultVariables = buildShippingAddressVars(params);

  const { shippingAddress } = context.extendQuery(customQuery,
    { shippingAddress: { mutation: defaultQuery, variables: defaultVariables } }
  );

  const request = await context.client.mutate({
    mutation: shippingAddress.mutation,
    variables: shippingAddress.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
}
