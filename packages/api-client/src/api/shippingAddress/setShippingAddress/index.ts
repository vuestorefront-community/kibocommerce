import { CustomQuery, Context } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { SetShippingAddressParams, SetShippingAddressResponse} from '../../../types/Api';

function buildShippingAddressVars(params) {
  return ({ orderId: params.orderId, fulfillmentInfoInput: params.fulfillmentInfoInput });
}

export default async function setShippingAddress(context:Context, params:SetShippingAddressParams, customQuery?: CustomQuery): Promise<SetShippingAddressResponse> {

  const defaultVariables = buildShippingAddressVars(params);

  const { shippingAddress } = context.extendQuery(customQuery,
    { shippingAddress: { mutation: defaultMutation, variables: defaultVariables } }
  );

  const request = await context.client.mutate({
    mutation: shippingAddress.mutation,
    variables: shippingAddress.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
}
