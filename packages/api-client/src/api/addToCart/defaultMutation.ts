import gql from 'graphql-tag';

const addToCurrentCartQuery = gql`
mutation addToCart($productToAdd:CartItem_Input!){
    addItemToCurrentCart(cartItem_Input: $productToAdd) {
      id
    }
}`;

export default addToCurrentCartQuery;
