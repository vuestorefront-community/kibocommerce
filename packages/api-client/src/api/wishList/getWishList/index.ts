import { GetWishListResponse } from './../../../types/Api';
/* eslint camelcase: "warn"*/
import { Context } from '@vue-storefront/core';
import defaultQuery from './defaultQuery';

const getWishList = async (context:Context): Promise<GetWishListResponse> => {
  return await context.client.query({
    query: defaultQuery,
    fetchPolicy: 'no-cache'
  });
};

export default getWishList;
