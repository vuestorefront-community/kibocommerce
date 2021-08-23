import { CustomQuery, Context } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { CreateWishListItemParams, CreateWishListItemResponse} from '../../../types/Api';

export default async function createWishListItem(context:Context, params:CreateWishListItemParams, customQuery?: CustomQuery): Promise<CreateWishListItemResponse> {

  const { wishListItem } = context.extendQuery(customQuery,
    { wishListItem: { mutation: defaultMutation, variables: params } }
  );

  const request = await context.client.mutate({
    mutation: wishListItem.mutation,
    variables: wishListItem.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
}
