import { CartGetters, AgnosticPrice, AgnosticTotals, AgnosticCoupon, AgnosticDiscount } from '@vue-storefront/core';
import type { Cart, CartItem } from '@vue-storefront/kibocommerce-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItems = (cart: Cart): CartItem[] => cart?.items || [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemName = (item: CartItem): string => item?.product?.name;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemImage = (item: CartItem): string => item?.product?.imageUrl;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemPrice = (item: CartItem): AgnosticPrice => {
  return {
    regular: item.product?.price?.price,
    special: item.product?.price?.salePrice
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemQty = (item: CartItem): number => item?.quantity;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemAttributes = (item: CartItem, filterByAttributeName?: Array<string>) => {
  const attributes= {};
  if(Array.isArray(filterByAttributeName) && filterByAttributeName.length)
  {
    filterByAttributeName.forEach(attr => {
      attributes[attr] = 'N/A';
      item.product?.options?.filter(o => {
        if(filterByAttributeName.includes(o.name.toLowerCase()) && (attr ==o.name.toLowerCase())){
          attributes[attr] =o.value;
          return true
        }
        return false;
      })
    })
  }else{
    const options = item.product?.options || [];
    options.forEach(opt => {
      attributes[opt.name] = opt.value;
    });
  }

  return attributes;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemSku = (item: CartItem): string => item?.product?.sku || item?.product?.upc || item?.product?.productCode;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotals(cart: Cart): AgnosticTotals {
  return {
    total: cart.total,
    subtotal: cart.subtotal,
    special: cart?.orderDiscounts?.length > 0 ? cart.discountedSubtotal : cart.subtotal
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartShippingPrice = (cart: Cart): number => cart?.shippingTotal;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartTotalItems = (cart: Cart): number => cart?.items?.length || 0;

export const getFormattedPrice = (price: number) => String(price);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCoupons = (cart: Cart): AgnosticCoupon[] =>
  cart?.orderDiscounts?.filter(d => d.couponCode !== null).map(d => ({
    id: d.discount?.id.toString(),
    name: d.discount?.name,
    code: d.couponCode,
    value: d.impact
  }));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getDiscounts = (cart: Cart): AgnosticDiscount[] =>
  cart?.orderDiscounts?.map(d => ({
    id: d.discount?.id.toString(),
    name: d.discount?.name,
    description: d.discount?.name,
    value: d.impact,
    code: d.couponCode
  }));

export const cartGetters: CartGetters<Cart, CartItem> = {
  getTotals: getTotals,
  getShippingPrice: getCartShippingPrice,
  getItems: getCartItems,
  getItemName: getCartItemName,
  getItemImage: getCartItemImage,
  getItemPrice: getCartItemPrice,
  getItemQty: getCartItemQty,
  getItemAttributes: getCartItemAttributes,
  getItemSku: getCartItemSku,
  getFormattedPrice: getFormattedPrice,
  getTotalItems: getCartTotalItems,
  getCoupons,
  getDiscounts
};
