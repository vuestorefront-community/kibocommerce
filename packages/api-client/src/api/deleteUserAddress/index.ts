import { Context } from '@vue-storefront/core';
import { MutationDeleteCustomerAccountContactArgs } from '../..';
import defaultMutation from './defaultMutation';

export default async function deleteUserAddress(context: Context, params: MutationDeleteCustomerAccountContactArgs): Promise<any> {
  const response = await context.client.mutate({
    mutation: defaultMutation,
    variables: params,
    fetchPolicy: 'no-cache'
  });

  return response;
}
