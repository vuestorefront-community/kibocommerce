import { Context, CustomQuery } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';

const addPaymentMethodToCheckout = async (context: Context, params, customQuery: CustomQuery) => {

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
