import { CustomQuery, Context } from '@vue-storefront/core';
import { Cart } from '../../../types/GraphQL';
import defaultQuery from './defaultQuery';

export default async function getCart(context:Context, _, customQuery?: CustomQuery): Promise<Cart> {
  const { cart } = context.extendQuery(customQuery,
    { cart: { query: defaultQuery } }
  );
  const request = await context.client.query({
    query: cart.query,
    variables: cart.variables,
    fetchPolicy: 'no-cache'
  });
  return request.data.currentCart as Cart || {};
}
