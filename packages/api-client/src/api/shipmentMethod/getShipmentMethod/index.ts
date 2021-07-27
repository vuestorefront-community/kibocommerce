import { CustomQuery, Context } from '@vue-storefront/core';
import defaultQuery from './defaultQuery';
import { GetShipmentMethodParams, GetShipmentMethodResponse} from '../../../types/Api';

function buildShipmentMethodVars(params) {
  return ({ orderId: params.orderId });
}

export default async function getShipmentMethod(context:Context, params: GetShipmentMethodParams, customQuery?: CustomQuery): Promise<GetShipmentMethodResponse> {

  const defaultVariables = buildShipmentMethodVars(params);

  const { shipmentMethod } = context.extendQuery(customQuery,
    { shipmentMethod: { query: defaultQuery, variables: defaultVariables } }
  );

  const request = await context.client.query({
    query: shipmentMethod.query,
    variables: shipmentMethod.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
}
