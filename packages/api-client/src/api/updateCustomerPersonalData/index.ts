import { updateCustomerPersonalDataParams, updateCustomerPersonalDataResponse } from './../../types/Api';
import { Context } from '@vue-storefront/core';
import updateCustomerData from './defaultMutation';

const updateCustomerPersonalData = async (
  context: Context,
  params: updateCustomerPersonalDataParams
): Promise<updateCustomerPersonalDataResponse> => {
  return await context.client.mutate({
    mutation: updateCustomerData,
    variables: params,
    fetchPolicy: 'no-cache'
  });
};

export default updateCustomerPersonalData;
