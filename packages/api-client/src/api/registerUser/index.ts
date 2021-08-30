
import { Context } from '@vue-storefront/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createAccountLoginMutation, createAccountMutation } from './defaultMutation';
import { RegisterUserParams, RegisterUserResponse } from '../../types/Api';

function getCreateAccountVars(account) {
  const { emailAddress, firstName, lastName} = account;
  return {
    createAccountInput: {
      emailAddress,
      firstName,
      lastName,
      acceptsMarketing: true,
      isActive: true,
      id: 0
    }
  };
}

function getCreateAccountLoginVars(id, password, account) {
  const { emailAddress } = account;
  return {
    id,
    createAccountLoginInput: {
      emailAddress,
      username: emailAddress,
      password
    }
  };
}

const registerUser = async (context:Context, params: RegisterUserParams): Promise<RegisterUserResponse> => {

  // CustomerAccount
  const customerAccountResponse = await context.client.mutate({
    mutation: createAccountMutation,
    variables: getCreateAccountVars(params.account),
    fetchPolicy: 'no-cache'
  }) as any;

  const id = customerAccountResponse.data?.account?.id;
  // CustomerAuthTicket
  const customerAccountLoginResponse = await context.client.mutate({
    mutation: createAccountLoginMutation,
    variables: getCreateAccountLoginVars(id, params.password, params.account),
    fetchPolicy: 'no-cache'
  }) as any;

  return customerAccountLoginResponse;
};

export default registerUser;
