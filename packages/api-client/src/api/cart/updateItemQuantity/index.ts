import { Context } from '@vue-storefront/core';
import updateItemQuantityMutation from './defaultMutation';

export default async function updateItemQuantity(context: Context, { product, quantity }): Promise<any> {
  return await context.client.mutate({
    mutation: updateItemQuantityMutation,
    variables: {
      itemId: product.id,
      quantity
    },
    fetchPolicy: 'no-cache'
  });
}
