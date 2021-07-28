import { Context } from '@vue-storefront/core';
import { MutationUpdateCustomerAccountContactArgs } from '../..';
import defaultMutation from './defaultMutation';

export default async function updateUserAddress(context: Context, params: MutationUpdateCustomerAccountContactArgs): Promise<any> {
  const response = await context.client.mutate({
    mutation: defaultMutation,
    variables: params,
    fetchPolicy: 'no-cache'
  });

  return response;
}
