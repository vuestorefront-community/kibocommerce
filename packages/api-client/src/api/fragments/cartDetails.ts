import gql from 'graphql-tag';
import cartItemDetails from '../fragments/cartItemDetails';

export default gql`
${cartItemDetails}

fragment cartDetails on Cart {
  id
  orderDiscounts {
    impact
    discount {
      id
      name        
    }
    couponCode
  }
  subtotal
  shippingTotal
  total
  items {
    ...cartItemDetails
  }
}
`;
