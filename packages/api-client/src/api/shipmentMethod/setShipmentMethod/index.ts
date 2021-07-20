import { CustomQuery, Context } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';

function buildShipmentMethodVars(params) {
  return ({ orderId: params.orderId, updateMode: params.updateMode, fulfillmentInfoInput: params.fulfillmentInfoInput });
}

export default async function setShipmentMethod(context:Context, params, customQuery?: CustomQuery): Promise<any> {

  const defaultVariables = buildShipmentMethodVars(params);

  const { shipmentMethod } = context.extendQuery(customQuery,
    { shipmentMethod: { mutation: defaultMutation, variables: defaultVariables } }
  );

  const request = await context.client.mutate({
    mutation: shipmentMethod.mutation,
    variables: shipmentMethod.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
}
