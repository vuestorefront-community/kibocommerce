import { CustomQuery, Context } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { UpdatePasswordParams, UpdatePasswordResponse} from '../../../types/Api';

export default async function updatePassword(context:Context, params:UpdatePasswordParams, customQuery?: CustomQuery): Promise<UpdatePasswordResponse> {

  const defaultVariables = params;

  const { updateUserPassword } = context.extendQuery(customQuery,
    { updateUserPassword: { mutation: defaultMutation, variables: defaultVariables } }
  );

  const request = await context.client.mutate({
    mutation: updateUserPassword.mutation,
    variables: updateUserPassword.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
}
