/* eslint camelcase: "warn"*/
import { Context } from '@vue-storefront/core';
import defaultQuery from './defaultQuery';
import { getCurrentUserResponse } from '../../types/Api';

const getCurrentUser = async (context:Context): Promise<getCurrentUserResponse> => {
  return await context.client.query({
    query: defaultQuery,
    fetchPolicy: 'no-cache'
  });
};

export default getCurrentUser;
