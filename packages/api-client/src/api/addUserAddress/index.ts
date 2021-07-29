import { Context } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { AddUserAddressParams, AddUserAddressResponse } from '../../types/Api';

export default async function addUserAddress(context: Context, params: AddUserAddressParams): Promise<AddUserAddressResponse> {
  return await context.client.mutate({
    mutation: defaultMutation,
    variables: params,
    fetchPolicy: 'no-cache'
  });
}
