import { Context } from '@vue-storefront/core';
import changeCustomerAccountPassword from './defaultMutation';
import { ChangePasswordParams, ChangePasswordResponse } from '../../types/Api';

const changePassword = async (
  context: Context,
  params: ChangePasswordParams
): Promise<ChangePasswordResponse> => {
  return await context.client.mutate({
    mutation: changeCustomerAccountPassword,
    variables: params,
    fetchPolicy: 'no-cache'
  });
};

export default changePassword;
