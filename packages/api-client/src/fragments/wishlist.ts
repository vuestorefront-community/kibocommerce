import gql from 'graphql-tag';

export const wishList = gql`
fragment wishList on Wishlist {
    customerAccountId
    name
    id
    items {
      id
      quantity
      total
      subtotal
      product {
        productCode
        sku
        variationProductCode
        imageUrl
        name
        price {
          price
          salePrice
        }
        options {
          attributeFQN
          name
          value
        }
      }
    }
}
`;
