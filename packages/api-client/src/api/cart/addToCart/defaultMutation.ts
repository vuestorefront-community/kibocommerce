import gql from 'graphql-tag';
import {cartItemDetails} from '../../../fragments';

const addToCurrentCartQuery = gql`
${cartItemDetails}

mutation addToCart($productToAdd:CartItemInput!){
    addItemToCurrentCart(cartItemInput: $productToAdd) {
      ...cartItemDetails
    }
}`;

export default addToCurrentCartQuery;
