import { Context } from '@vue-storefront/core';
import removeCartCouponMutation from './defaultMutation';
import { removeCouponParams, removeCouponResponse } from '../../../types/Api';

export default async function removeCoupon(context: Context, { cartId, couponCode }: removeCouponParams): Promise<removeCouponResponse> {
  return await context.client.mutate({
    mutation: removeCartCouponMutation,
    variables: {
      cartId,
      couponCode
    },
    fetchPolicy: 'no-cache'
  });
}
