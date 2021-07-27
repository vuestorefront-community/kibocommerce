import { Context } from '@vue-storefront/core';
import removeFromCartMutation from './defaultMutation';
import { RemoveFromCartParams, RemoveFromCartResponse } from '../../../types/Api';

export default async function removeFromCart(context: Context, { product }: RemoveFromCartParams): Promise<RemoveFromCartResponse> {
  return await context.client.mutate({
    mutation: removeFromCartMutation,
    variables: {
      id: product.id
    },
    fetchPolicy: 'no-cache'
  });
}
