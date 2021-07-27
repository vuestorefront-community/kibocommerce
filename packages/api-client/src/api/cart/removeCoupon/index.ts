import { Context } from '@vue-storefront/core';
import removeCartCouponMutation from './defaultMutation';
import { RemoveCouponParams, RemoveCouponResponse } from '../../../types/Api';

export default async function removeCoupon(context: Context, { cartId, couponCode }: RemoveCouponParams): Promise<RemoveCouponResponse> {
  return await context.client.mutate({
    mutation: removeCartCouponMutation,
    variables: {
      cartId,
      couponCode
    },
    fetchPolicy: 'no-cache'
  });
}
