/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Context, CustomQuery } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';

export default async (
  context: Context,
  params: any,
  customQuery?: CustomQuery
): Promise<any> => {
  const { billingInfo } = context.extendQuery(customQuery, {
    billingInfo: { mutation: defaultMutation, variables: params },
  });
  return await context.client.mutate({
    mutation: billingInfo.mutation,
    variables: billingInfo.variables,
  });
};
