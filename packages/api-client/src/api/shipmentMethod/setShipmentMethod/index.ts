import { CustomQuery, Context } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { setShipmentMethodParams, setShipmentMethodResponse} from '../../../types/Api';

function buildShipmentMethodVars(params) {
  return ({ orderId: params.orderId, updateMode: params.updateMode, fulfillmentInfoInput: params.fulfillmentInfoInput });
}

export default async function setShipmentMethod(context:Context, params:setShipmentMethodParams, customQuery?: CustomQuery): Promise<setShipmentMethodResponse> {

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
