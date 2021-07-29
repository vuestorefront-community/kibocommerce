import { Context, CustomQuery } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { AddPaymentToCheckoutParams, AddPaymentToCheckoutResponse } from '../../types/Api';

const addPaymentMethodToCheckout = async (context: Context, params:AddPaymentToCheckoutParams, customQuery: CustomQuery) : Promise<AddPaymentToCheckoutResponse> => {

  const { addPaymentMethod } = context.extendQuery(customQuery,
    { addPaymentMethod: { mutation: defaultMutation, variables: params } }
  );
  const resp = await context.client.mutate({
    mutation: addPaymentMethod.mutation,
    variables: addPaymentMethod.variables
  });

  return resp;
};

export default addPaymentMethodToCheckout;
