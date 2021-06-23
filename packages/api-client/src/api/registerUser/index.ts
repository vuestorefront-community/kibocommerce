
import { Context } from '@vue-storefront/core'
import { CustomerAccountAndAuthInfo_Input, CustomerAccount, CustomerAuthTicket } from '../../types/GraphQL';
import { createAccountLoginMutation, createAccountMutation } from './defaultMutation';

function getCreateAccountVars(account) {
    const { emailAddress, firstName, lastName} = account
    return { 
        createAccountInput: {
            emailAddress,
            firstName,
            lastName,
            acceptsMarketing: true,
            isAnonymous: false,
            isLocked:false,
            isActive:true,
            id: 0,
            hasExternalPassword: false,
            taxExempt:false
          }
    }
}

function getCreateAccountLoginVars(id, password, account){
    const { emailAddress } = account
    return { 
        id,
        createAccountLoginInput: {
            emailAddress,
            username: emailAddress,
            password,
            isImport: false
          }
      }
}

const registerUser = async (context:Context, params: CustomerAccountAndAuthInfo_Input ): Promise<any> => {

  const customerAccountResponse = await context.client.mutate({
    mutation: createAccountMutation,
    variables: getCreateAccountVars(params.account),
    fetchPolicy: 'no-cache'
  }) as any;//CustomerAccount

  const id = customerAccountResponse.data?.account?.id;

  const customerAccountLoginResponse = await context.client.mutate({
      mutation: createAccountLoginMutation,
      variables: getCreateAccountLoginVars(id, params.password, params.account),
      fetchPolicy: 'no-cache'
  }) as any; //CustomerAuthTicket

  return customerAccountLoginResponse;
};

export default registerUser;