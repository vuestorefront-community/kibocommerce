import { Context } from '@vue-storefront/core';
import { Cart } from '../../../types/GraphQL';
import defaultMutation from './defaultMutation';

export default async function clearCart(context: Context): Promise<Cart> {
  return await context.client.mutate({
    mutation: defaultMutation,
    fetchPolicy: 'no-cache'
  });
}
