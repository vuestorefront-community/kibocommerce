/* eslint camelcase: "warn"*/
import { Context } from '@vue-storefront/core';
import { KiboApolloClient } from '@kibocommerce/graphql-client';
import { logInUserParams, logInUserResponse } from '../../types/Api';

const loginUser = async (context:Context, params:logInUserParams): Promise<logInUserResponse> => {
  const client = context.client as KiboApolloClient;
  const { username, password } = params;
  const loginResponse = await client.loginCustomerAndSetAuthTicket({ username, password }) as any;
  return loginResponse;
};

export default loginUser;
