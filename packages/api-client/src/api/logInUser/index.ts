/* eslint camelcase: "warn"*/
import { Context } from '@vue-storefront/core';
import { KiboApolloClient } from '@kibocommerce/graphql-client';
import { CustomerUserAuthInfoInput, CustomerAuthTicket } from '../../types/GraphQL';

const loginUser = async (context:Context, params:CustomerUserAuthInfoInput): Promise<CustomerAuthTicket> => {
  const client = context.client as KiboApolloClient;
  const { username, password } = params;
  const loginResponse = await client.loginCustomerAndSetAuthTicket({ username, password }) as any;
  return loginResponse;
};

export default loginUser;
