import { Context, CustomQuery} from '@vue-storefront/core';
import defaultQuery from './defaultQuery';
import { getBillingInfoParams, getBillingInfoResponse } from '../../types/Api';

const getBillingInfo = async (context: Context, params: getBillingInfoParams, customQuery: CustomQuery): Promise<getBillingInfoResponse> => {

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
