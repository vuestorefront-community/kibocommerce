import { Context } from '@vue-storefront/core';
import updateCartCouponMutation from './defaultMutation';

export default async function applyCoupon(context: Context, { cartId, couponCode }): Promise<any> {
  return await context.client.mutate({
    mutation: updateCartCouponMutation,
    variables: {
      cartId,
      couponCode
    },
    fetchPolicy: 'no-cache'
  });
}
