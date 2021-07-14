/* eslint camelcase: "warn"*/
import { Context } from '@vue-storefront/core';
import defaultQuery from './defaultQuery';
import { CustomerResponse } from '../../types/Api';

const getCurrentUser = async (context:Context): Promise<CustomerResponse> => {
  return await context.client.query({
    query: defaultQuery,
    fetchPolicy: 'no-cache'
  });
};

export default getCurrentUser;
