import { IUpdateCustomerDataParams } from './../../types/Api';
import { Context } from '@vue-storefront/core';
import { CustomerResponse } from '../../types/Api';
import updateCustomerData from './defaultMutation';

const updateCustomerPersonalData = async (
  context: Context,
  params: IUpdateCustomerDataParams
): Promise<CustomerResponse> => {
  return await context.client.mutate({
    mutation: updateCustomerData,
    variables: params,
    fetchPolicy: 'no-cache'
  });
};

export default updateCustomerPersonalData;
