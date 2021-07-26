import { Context } from '@vue-storefront/core';
import getOrCreateCheckoutMutation from './defaultMutation';
import { getOrCreateCheckoutFromCartParams, getOrCreateCheckoutFromCartResponse } from '../../types/Api';

const getOrCreateCheckoutFromCart = async (context:Context, params: getOrCreateCheckoutFromCartParams): Promise<getOrCreateCheckoutFromCartResponse> => {
  return await context.client.mutate({
    mutation: getOrCreateCheckoutMutation,
    variables: params,
    fetchPolicy: 'no-cache'
  });
};

export default getOrCreateCheckoutFromCart;
