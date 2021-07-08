import gql from 'graphql-tag';

const getOrCreateCheckoutMutation = gql`
mutation getOrCreateCheckoutFromCart($cartId:String!) {
    createOrder(cartId:$cartId) {
        id
    }
}
`;
export default getOrCreateCheckoutMutation;
