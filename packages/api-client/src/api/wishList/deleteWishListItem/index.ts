import { Context } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { DeleteWishListItemParams, DeleteWishListItemResponse} from '../../../types/Api';

export default async function deleteWishListItem(context:Context, params:DeleteWishListItemParams): Promise<DeleteWishListItemResponse> {

  const request = await context.client.mutate({
    mutation: defaultMutation,
    variables: params,
    fetchPolicy: 'no-cache'
  });

  return request;
}
