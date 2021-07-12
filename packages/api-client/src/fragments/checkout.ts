export const checkoutItemProductInfo = `
fragment checkoutItemProductInfo on CrProduct {
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
`;

export const checkoutLineItemInfo = `
fragment checkoutLineItemInfo on CrOrderItem {
    id
    total
    subtotal
    discountTotal
    quantity
    product {
        ...checkoutItemProductInfo
    }
 }
 ${checkoutItemProductInfo}
 `;

export const baseCheckoutInfo = `
fragment baseCheckoutInfo on Order {
    id
    total
    shippingTotal
    discountTotal
    subtotal
    taxTotal
    orderNumber
    orderDiscounts {
        impact
        discount {
            id
            name        
        }
        couponCode
   }
}`;
