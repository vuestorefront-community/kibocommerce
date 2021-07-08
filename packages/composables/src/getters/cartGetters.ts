import { CartGetters, AgnosticPrice, AgnosticTotals, AgnosticCoupon, AgnosticDiscount } from '@vue-storefront/core';
import { Cart, CartItem } from '../../../api-client/src/types/GraphQL';

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
  const attributes = {};
  const options = filterByAttributeName
    ? item.product?.options?.filter(o => filterByAttributeName.includes(o.name.toLowerCase()))
    : item.product?.options || [];

  options.forEach(opt => {
    attributes[opt.name] = opt.value;
  });

  return attributes;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemSku = (item: CartItem): string => item?.product?.sku || item?.product?.upc || item?.product?.productCode;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotals(cart: Cart): AgnosticTotals {
  return {
    total: cart.total,
    subtotal: cart.subtotal
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartShippingPrice = (cart: Cart): number => cart?.shippingTotal;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartTotalItems = (cart: Cart): number => cart?.items?.length || 0;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

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

const cartGetters: CartGetters<Cart, CartItem> = {
  getTotals: getCartTotals,
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
