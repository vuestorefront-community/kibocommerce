import gql from 'graphql-tag';
import cartItemDetails from '../../fragments/cartItemDetails';

const addToCurrentCartQuery = gql`
${cartItemDetails}

mutation addToCart($productToAdd:CartItem_Input!){
    addItemToCurrentCart(cartItem_Input: $productToAdd) {
      ...cartItemDetails
    }
}`;

export default addToCurrentCartQuery;
