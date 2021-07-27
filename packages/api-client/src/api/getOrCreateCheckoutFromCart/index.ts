import { Context } from '@vue-storefront/core';
import getOrCreateCheckoutMutation from './defaultMutation';
import { GetOrCreateCheckoutFromCartParams, GetOrCreateCheckoutFromCartResponse } from '../../types/Api';

const getOrCreateCheckoutFromCart = async (context:Context, params: GetOrCreateCheckoutFromCartParams): Promise<GetOrCreateCheckoutFromCartResponse> => {
  return await context.client.mutate({
    mutation: getOrCreateCheckoutMutation,
    variables: params,
    fetchPolicy: 'no-cache'
  });
};

export default getOrCreateCheckoutFromCart;
