import gql from 'graphql-tag';
import { cartDetails } from '../../../fragments';

/*
* Remove a coupon from a cart
*/
const deleteCartCouponMutation = gql`
${cartDetails}

mutation deleteCartCoupon($cartId: String!, $couponCode: String!) {
    deleteCartCoupon(cartId: $cartId, couponCode: $couponCode) {
        ...cartDetails
    }
}`;

export default deleteCartCouponMutation;
