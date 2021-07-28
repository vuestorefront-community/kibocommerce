import { Context, CustomQuery} from '@vue-storefront/core';
import defaultQuery from './defaultQuery';
// import { GetBillingInfoParams, GetBillingInfoResponse } from '../../types/Api';

export default async (context: Context, params: {orderId: string}, customQuery?: CustomQuery) => {

  const { billingInfo } = context.extendQuery(customQuery,
    { billingInfo: { query: defaultQuery, variables: params } }
  );

  return await context.client.query({
    query: billingInfo.query,
    variables: billingInfo.variables
  });
};
