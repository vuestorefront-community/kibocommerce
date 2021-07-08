import { Context } from '@vue-storefront/core';
import removeCartCouponMutation from './defaultMutation';

export default async function removeCoupon(context: Context, { cartId, couponCode }): Promise<void> {
  return await context.client.mutate({
    mutation: removeCartCouponMutation,
    variables: {
      cartId,
      couponCode
    },
    fetchPolicy: 'no-cache'
  });
}
