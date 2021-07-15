import { Context, CustomQuery } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';

const buildSetBillingVars = (params) => ({ billingInfoInput: params.billingDetails});

const setBillingInfo = async (context: Context, params, customQuery: CustomQuery) => {

  const billingVariables = buildSetBillingVars(params);
  const { billingInfo } = context.extendQuery(customQuery,
    { billingInfo: { mutation: defaultMutation, variables: billingVariables } }
  );

  return await context.client.mutate({
    query: billingInfo.mutation,
    variables: billingInfo.variables
  });
};

export default setBillingInfo;
