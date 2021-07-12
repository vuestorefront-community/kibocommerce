import gql from 'graphql-tag';
import { checkoutLineItemInfo, baseCheckoutInfo } from '../../fragments';

export default gql`
query getCheckout($orderId: String!){
    order(orderId:$orderId) {
        ...baseCheckoutInfo
        items {
            ...checkoutLineItemInfo
        }
    }
}
${baseCheckoutInfo}
${checkoutLineItemInfo}
`;
