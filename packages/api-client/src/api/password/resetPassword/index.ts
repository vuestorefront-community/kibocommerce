import { CustomQuery, Context } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { ResetPasswordParams, ResetPasswordResponse} from '../../../types/Api';

export default async function resetPassword(context:Context, params:ResetPasswordParams, customQuery?: CustomQuery): Promise<ResetPasswordResponse> {

  const defaultVariables = params;

  const { resetUserPassword } = context.extendQuery(customQuery,
    { resetUserPassword: { mutation: defaultMutation, variables: defaultVariables } }
  );

  const request = await context.client.mutate({
    mutation: resetUserPassword.mutation,
    variables: resetUserPassword.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
}
