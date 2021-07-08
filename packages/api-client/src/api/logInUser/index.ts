/* eslint camelcase: "warn"*/

import { Context } from '@vue-storefront/core';
import { KiboApolloClient } from 'kibo.apollo.typescript.client';
import { CustomerUserAuthInfo_Input } from '../../types/GraphQL';
import mutation from './defaultMutation';

const loginUser = async (context:Context, params:CustomerUserAuthInfo_Input): Promise<any> => {

  const client = context.client as KiboApolloClient;
  const { username, password } = params;
  await client.authClient.customerPasswordAuth({ username, password });

  /* TODO: Switch this for "getCurrentUser" once Thom has deployed that API */
  const variables = { loginInput: params };
  const loginResponse = await context.client.mutate({
    mutation,
    variables,
    fetchPolicy: 'no-cache'
  }) as any;

  return loginResponse;
};

export default loginUser;
