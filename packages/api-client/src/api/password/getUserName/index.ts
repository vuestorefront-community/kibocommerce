import { CustomQuery, Context } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { GetUserNameParams, GetUserNameResponse} from '../../../types/Api';

export default async function getUserName(context:Context, params:GetUserNameParams, customQuery?: CustomQuery): Promise<GetUserNameResponse> {

  const defaultVariables = params;

  const { userName } = context.extendQuery(customQuery,
    { userName: { mutation: defaultMutation, variables: defaultVariables } }
  );

  const request = await context.client.mutate({
    mutation: userName.mutation,
    variables: userName.variables,
    fetchPolicy: 'no-cache',
    context: {
      headers: {
        'x-vol-user-claims': null
      }
    }
  });

  return request;
}
