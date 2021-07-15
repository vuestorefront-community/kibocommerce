import { Context, CustomQuery} from '@vue-storefront/core';
import defaultQuery from './defaultQuery';

const getBillingInfo = async (context: Context, params: {orderId: string}, customQuery: CustomQuery) => {

  const { billingInfo } = context.extendQuery(customQuery,
    { billingInfo: { query: defaultQuery, variables: params } }
  );

  const resp = await context.client.query({
    query: billingInfo.query,
    variables: billingInfo.variables
  });
  return resp;
};

export default getBillingInfo;
