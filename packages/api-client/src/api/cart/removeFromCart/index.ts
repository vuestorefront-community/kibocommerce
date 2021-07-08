import { Context } from '@vue-storefront/core';
import removeFromCartMutation from './defaultMutation';

export default async function removeFromCart(context: Context, { product }): Promise<any> {
  return await context.client.mutate({
    mutation: removeFromCartMutation,
    variables: {
      id: product.id
    },
    fetchPolicy: 'no-cache'
  });
}
