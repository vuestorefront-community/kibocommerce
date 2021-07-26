import { Context } from '@vue-storefront/core';
import updateItemQuantityMutation from './defaultMutation';
import { updateItemQuantityParams, updateItemQuantityResponse } from '../../../types/Api';

export default async function updateItemQuantity(context: Context, { product, quantity }:updateItemQuantityParams): Promise<updateItemQuantityResponse> {
  return await context.client.mutate({
    mutation: updateItemQuantityMutation,
    variables: {
      itemId: product.id,
      quantity
    },
    fetchPolicy: 'no-cache'
  });
}
