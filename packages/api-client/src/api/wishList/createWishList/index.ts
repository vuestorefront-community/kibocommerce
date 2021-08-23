import { CustomQuery, Context } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { CreateWishListParams, CreateWishListResponse} from '../../../types/Api';

export default async function createWishList(context:Context, params:CreateWishListParams, customQuery?: CustomQuery): Promise<CreateWishListResponse> {

  const { wishList } = context.extendQuery(customQuery,
    { wishList: { mutation: defaultMutation, variables: params } }
  );

  const request = await context.client.mutate({
    mutation: wishList.mutation,
    variables: wishList.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
}
