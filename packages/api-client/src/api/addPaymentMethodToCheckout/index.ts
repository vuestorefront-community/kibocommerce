import { Context, CustomQuery } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { AddPaymentMethodToCheckoutParams, AddPaymentMethodToCheckoutResponse } from '../../types/Api';

const addPaymentMethodToCheckout = async (context: Context, params: AddPaymentMethodToCheckoutParams, customQuery: CustomQuery): Promise<AddPaymentMethodToCheckoutResponse> => {

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
