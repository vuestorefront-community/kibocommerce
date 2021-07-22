import { CustomQuery, Context } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';

function buildCreateOrderVars(params) {
  return ({ orderId: params.orderId, orderActionInput: {actionName: 'Submit'} });
}

export default async function createOrder(context:Context, params: {orderId: string}, customQuery?: CustomQuery): Promise<any> {

  const defaultVariables = buildCreateOrderVars(params);

  const { createOrderMethod } = context.extendQuery(customQuery,
    { createOrderMethod: { mutation: defaultMutation, variables: defaultVariables } }
  );

  const request = await context.client.mutate({
    mutation: createOrderMethod.mutation,
    variables: createOrderMethod.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
}
