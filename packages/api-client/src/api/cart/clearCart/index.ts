import { Context } from '@vue-storefront/core';
import { Cart } from '../../../types/GraphQL';
import defaultMutation from './defaultMutation';
import { ClearCartResponse} from '../../../types/Api';

export default async function clearCart(context: Context): Promise<ClearCartResponse> {
  return await context.client.mutate({
    mutation: defaultMutation,
    fetchPolicy: 'no-cache'
  });
}
