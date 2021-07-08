/* eslint camelcase: "warn"*/
import { Context } from '@vue-storefront/core';
import { KiboApolloClient } from 'kibo.apollo.typescript.client';
import { CustomerUserAuthInfo_Input, CustomerAuthTicket } from '../../types/GraphQL';

const loginUser = async (context:Context, params:CustomerUserAuthInfo_Input): Promise<CustomerAuthTicket> => {

  const client = context.client as KiboApolloClient;
  const { username, password } = params;
  return await client.authClient.customerPasswordAuth({ username, password });
};

export default loginUser;
