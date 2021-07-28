import { Context, CustomQuery } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
// import { SetBillingInfoParams, SetBillingInfoResponse } from '../../types/Api';

export default async (context: Context, params, customQuery?: CustomQuery) => {
  const { billingInfo } = context.extendQuery(customQuery,
    { billingInfo: { mutation: defaultMutation, variables: params } }
  );
  return await context.client.mutate({
    mutation: billingInfo.mutation,
    variables: billingInfo.variables
  });
};
