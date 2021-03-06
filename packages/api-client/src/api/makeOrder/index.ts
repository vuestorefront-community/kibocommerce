import { CustomQuery, Context } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { MakeOrderParams, MakeOrderResponse } from '../../types/Api';

function buildMakeOrderVars(params) {
  return ({ orderId: params.orderId, orderActionInput: {actionName: 'SubmitOrder'} });
}

export default async function makeOrder(context:Context, params: MakeOrderParams, customQuery?: CustomQuery): Promise<MakeOrderResponse> {

  const defaultVariables = buildMakeOrderVars(params);

  const { makeOrderMethod } = context.extendQuery(customQuery,
    { makeOrderMethod: { mutation: defaultMutation, variables: defaultVariables } }
  );

  const request = await context.client.mutate({
    mutation: makeOrderMethod.mutation,
    variables: makeOrderMethod.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
}
