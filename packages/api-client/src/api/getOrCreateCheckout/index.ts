import { Context } from '@vue-storefront/core';
import getOrCreateCheckoutMutation from './defaultMutation';

const getOrCreateCheckoutFromCart = async (context:Context, params: { cartId: string}): Promise<any> => {
  return await context.client.mutation({
    mutation: getOrCreateCheckoutMutation,
    variables: params,
    fetchPolicy: 'no-cache'
  });
};

export default getOrCreateCheckoutFromCart;
