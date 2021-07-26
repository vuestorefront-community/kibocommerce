import { Context } from '@vue-storefront/core';
import updateCartCouponMutation from './defaultMutation';
import { applyCouponParams, applyCouponResponse} from '../../../types/Api';

export default async function applyCoupon(context: Context, { cartId, couponCode }: applyCouponParams): Promise<applyCouponResponse> {
  return await context.client.mutate({
    mutation: updateCartCouponMutation,
    variables: {
      cartId,
      couponCode
    },
    fetchPolicy: 'no-cache'
  });
}
