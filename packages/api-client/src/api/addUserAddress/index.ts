import { Context } from '@vue-storefront/core';
import { MutationCreateCustomerAccountContactArgs } from '../..';
import defaultMutation from './defaultMutation';

export default async function addUserAddress(context: Context, params: MutationCreateCustomerAccountContactArgs): Promise<any> {
  return await context.client.mutate({
    mutation: defaultMutation,
    variables: params,
    fetchPolicy: 'no-cache'
  });
}
