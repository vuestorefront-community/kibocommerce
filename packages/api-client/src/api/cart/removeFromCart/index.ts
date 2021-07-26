import { Context } from '@vue-storefront/core';
import removeFromCartMutation from './defaultMutation';
import { removeFromCartParams, removeFromCartResponse } from '../../../types/Api';

export default async function removeFromCart(context: Context, { product }: removeFromCartParams): Promise<removeFromCartResponse> {
  return await context.client.mutate({
    mutation: removeFromCartMutation,
    variables: {
      id: product.id
    },
    fetchPolicy: 'no-cache'
  });
}
