import { Context } from '@vue-storefront/core';
import getOrCreateCheckoutMutation from './defaultMutation';
import { OrderMutationResponse } from '../../types/Api';

const getOrCreateCheckoutFromCart = async (context:Context, params: { cartId: string}): Promise<OrderMutationResponse> => {
  return await context.client.mutate({
    mutation: getOrCreateCheckoutMutation,
    variables: params,
    fetchPolicy: 'no-cache'
  });
};

export default getOrCreateCheckoutFromCart;
