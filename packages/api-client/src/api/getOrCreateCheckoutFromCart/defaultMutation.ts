import gql from 'graphql-tag';
import { baseCheckoutInfo, checkoutLineItemInfo } from '../../fragments';

export default gql`
mutation getOrCreateCheckoutFromCart($cartId:String!) {
    order:createOrder(cartId:$cartId) {
        ...baseCheckoutInfo
        items {
            ...checkoutLineItemInfo
        }
    }
}
${baseCheckoutInfo}
${checkoutLineItemInfo}
`;
