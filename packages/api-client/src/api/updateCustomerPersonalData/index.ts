import { CustomerAccount } from './../../types/GraphQL';
import { Context } from '@vue-storefront/core';
import updateCustomerData from './defaultMutation';

const updateCustomerPersonalData = async (
  context: Context,
  params: {
    accountId: number;
    customerAccountInput: {
      emailAddress: string;
      userName: string;
      firstName: string;
      lastName: string;
      isAnonymous: boolean;
      isLocked: boolean;
      isActive: boolean;
      acceptsMarketing: boolean;
      hasExternalPassword: boolean;
      id: number;
      taxExempt: boolean;
    };
  }
): Promise<CustomerAccount> => {
  return await context.client.mutate({
    mutation: updateCustomerData,
    variables: params,
    fetchPolicy: 'no-cache'
  });
};

export default updateCustomerPersonalData;
