import { Context } from '@vue-storefront/core';
import changeCustomerAccountPassword from './defaultMutation';
import { changePasswordParams, changePasswordResponse } from '../../types/Api';

const changePassword = async (
  context: Context,
  params: changePasswordParams
): Promise<changePasswordResponse> => {
  return await context.client.mutate({
    mutation: changeCustomerAccountPassword,
    variables: params,
    fetchPolicy: 'no-cache'
  });
};

export default changePassword;
