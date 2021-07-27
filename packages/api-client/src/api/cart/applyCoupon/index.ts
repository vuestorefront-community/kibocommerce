import { Context } from '@vue-storefront/core';
import updateCartCouponMutation from './defaultMutation';
import { ApplyCouponParams, ApplyCouponResponse} from '../../../types/Api';

export default async function applyCoupon(context: Context, { cartId, couponCode }: ApplyCouponParams): Promise<ApplyCouponResponse> {
  return await context.client.mutate({
    mutation: updateCartCouponMutation,
    variables: {
      cartId,
      couponCode
    },
    fetchPolicy: 'no-cache'
  });
}
