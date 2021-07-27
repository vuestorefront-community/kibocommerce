import { Context } from '@vue-storefront/core';
import updateItemQuantityMutation from './defaultMutation';
import { UpdateItemQuantityParams, UpdateItemQuantityResponse } from '../../../types/Api';

export default async function updateItemQuantity(context: Context, { product, quantity }:UpdateItemQuantityParams): Promise<UpdateItemQuantityResponse> {
  return await context.client.mutate({
    mutation: updateItemQuantityMutation,
    variables: {
      itemId: product.id,
      quantity
    },
    fetchPolicy: 'no-cache'
  });
}
