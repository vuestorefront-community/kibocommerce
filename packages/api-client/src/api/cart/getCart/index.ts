import { CustomQuery, Context } from '@vue-storefront/core';
import defaultQuery from './defaultQuery';
import { getCartResponse } from '../../../types/Api';

export default async function getCart(context:Context, _, customQuery?: CustomQuery): Promise<getCartResponse> {
  const { cart } = context.extendQuery(customQuery,
    { cart: { query: defaultQuery } }
  );
  return await context.client.query({
    query: cart.query,
    variables: cart.variables,
    fetchPolicy: 'no-cache'
  });
}
