/* eslint camelcase: "warn"*/
import { Context } from '@vue-storefront/core';
import loginMutation from './defaultMutation';
import { LogInUserParams, LogInUserResponse } from '../../types/Api';
import { KiboApolloClient } from '@kibocommerce/graphql-client';

const loginUser = async (
  context: Context,
  params: LogInUserParams
): Promise<LogInUserResponse> => {
  const { username, password } = params;
  const client = context.client as KiboApolloClient;
  const loginResponse = await context.client.mutate({
    mutation: loginMutation,
    variables: {
      loginInput: {
        username,
        password
      }
    },
    fetchPolicy: 'no-cache'
  });

  const {
    accessToken,
    accessTokenExpiration,
    refreshToken,
    userId,
    refreshTokenExpiration
  } = loginResponse.data.account;

  client.shopperAuthManager.setTicket({
    accessToken,
    accessTokenExpiration,
    refreshToken,
    userId,
    refreshTokenExpiration
  });

  return loginResponse;
};

export default loginUser;
