import { Context } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { UpdateUserAddressParams, UpdateUserAddressResponse } from '../../types/Api';

export default async function updateUserAddress(context: Context, params: UpdateUserAddressParams): Promise<UpdateUserAddressResponse> {
  const response = await context.client.mutate({
    mutation: defaultMutation,
    variables: params,
    fetchPolicy: 'no-cache'
  });

  return response;
}
