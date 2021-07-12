import { CustomQuery, Context } from '@vue-storefront/core';
import getCheckoutQuery from './defaultQuery';
import { OrderMutationResponse } from '../../types/Api';

const getCheckout = async (context:Context, params: { orderId: string}, customQuery?: CustomQuery): Promise<OrderMutationResponse> => {

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
