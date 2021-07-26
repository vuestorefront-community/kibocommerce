import { Context } from '@vue-storefront/core';
import { MutationUpdateCustomerAccountContactArgs } from '../..';
import defaultMutation from './defaultMutation';

export default async function updateUserAddress(context: Context, params: MutationUpdateCustomerAccountContactArgs): Promise<any> {
  return await context.client.mutate({
    query: defaultMutation,
    variables: params,
    fetchPolicy: 'no-cache'
  });
}
