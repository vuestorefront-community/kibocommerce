import gql from 'graphql-tag';
import cartDetails from '../../fragments/cartDetails';

/*
* Apply a coupon to a cart
*/
const updateCartCouponMutation = gql`
${cartDetails}

mutation updateCartCoupon($cartId: String!, $couponCode: String!) {
    updateCartCoupon(cartId: $cartId, couponCode: $couponCode) {
        ...cartDetails
    }
}`;

export default updateCartCouponMutation;
