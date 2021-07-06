import gql from 'graphql-tag';

const updateCurrentCartQuantityQuery = gql`
mutation updateCartItemQuantity($itemId:String!, $quantity: Int!){
    updateCurrentCartItemQuantity(cartItemId:$itemId, quantity:$quantity){
      id
      quantity
    }
}`;

export default updateCurrentCartQuantityQuery;
