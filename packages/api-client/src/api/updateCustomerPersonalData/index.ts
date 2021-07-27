import { Context } from '@vue-storefront/core';
import updateCustomerData from './defaultMutation';
import { UpdateCustomerPersonalDataParams, UpdateCustomerPersonalDataResponse } from './../../types/Api';

const updateCustomerPersonalData = async (
  context: Context,
  params: UpdateCustomerPersonalDataParams
): Promise<UpdateCustomerPersonalDataResponse> => {
  return await context.client.mutate({
    mutation: updateCustomerData,
    variables: params,
    fetchPolicy: 'no-cache'
  });
};

export default updateCustomerPersonalData;
