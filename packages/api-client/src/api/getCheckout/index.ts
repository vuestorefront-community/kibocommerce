import { CustomQuery, Context } from '@vue-storefront/core';
import getCheckoutQuery from './defaultQuery';
import { GetCheckoutParams, GetCheckoutResponse } from '../../types/Api';

const getCheckout = async (context:Context, params: GetCheckoutParams, customQuery?: CustomQuery): Promise<GetCheckoutResponse> => {

  const { checkout } = context.extendQuery(customQuery,
    { checkout: { query: getCheckoutQuery, variables: params } }
  );

  return await context.client.query({
    query: checkout.query,
    variables: checkout.variables,
    fetchPolicy: 'no-cache'
  });
};

export default getCheckout;
