import { Context } from '@vue-storefront/core';
import { MutationDeleteCustomerAccountContactArgs } from '../..';
import defaultMutation from './defaultMutation';

export default async function deleteUserAddress(context: Context, params: MutationDeleteCustomerAccountContactArgs): Promise<any> {
  return await context.client.mutate({
    query: defaultMutation,
    variables: params,
    fetchPolicy: 'no-cache'
  });
}
