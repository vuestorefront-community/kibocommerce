import { Context, CustomQuery} from '@vue-storefront/core';
import defaultQuery from './defaultQuery';
import { GetBillingInfoParams, GetBillingInfoResponse } from '../../types/Api';

const getBillingInfo = async (context: Context, params: GetBillingInfoParams, customQuery: CustomQuery): Promise<GetBillingInfoResponse> => {

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
