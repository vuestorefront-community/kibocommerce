import gql from 'graphql-tag';

export default gql`
query cart {
  currentCart {
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
      product {
        productCode
        name
        description
        imageUrl
        options {
          attributeFQN
          name
          value
        }
        properties {
          attributeFQN
          name
          values {
            value
          }
        }
        sku
        price {
          price
          salePrice
        }
        categories {
          id
        }
      }
      quantity
    }
  }
}
`;
