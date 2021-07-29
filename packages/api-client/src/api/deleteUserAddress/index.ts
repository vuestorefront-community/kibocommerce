import { Context } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { DeleteUserAddressParams, DeleteUserAddressResponse } from '../../types/Api';

export default async function deleteUserAddress(context: Context, params: DeleteUserAddressParams): Promise<DeleteUserAddressResponse> {
  const response = await context.client.mutate({
    mutation: defaultMutation,
    variables: params,
    fetchPolicy: 'no-cache'
  });

  return response;
}
