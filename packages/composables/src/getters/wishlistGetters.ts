/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  WishlistGetters,
  AgnosticPrice,
  AgnosticTotals
} from '@vue-storefront/core';
import type { Wishlist, WishlistItem, CrProductInput} from '@vue-storefront/kibocommerce-api';

import {WishlistItemAttributesResponse } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItems = (wishlist: Wishlist): any[] =>
  wishlist?.items.map((item) => item.product);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemName = (product: CrProductInput): string => product?.name;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemImage = (product: CrProductInput): string => product?.imageUrl;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemPrice = (product: CrProductInput): AgnosticPrice => {
  const { price, salePrice } = product.price;
  return {
    regular: price as number,
    special: salePrice as number
  } as AgnosticPrice;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemAttributes = (
  product: CrProductInput,
  filterByAttributeName?: string[]
):WishlistItemAttributesResponse => {

  const attributes = {};
  const options = filterByAttributeName
    ? product?.options?.filter((o) =>
      filterByAttributeName.includes(o.name.toLowerCase())
    )
    : product?.options || [];
  options.forEach((opt) => {
    attributes[opt.name] = opt.value;
  });

  return attributes;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemSku = (product: CrProductInput): string =>product?.sku || product?.variationProductCode || product?.productCode;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getTotals = (wishlist: Wishlist): AgnosticTotals => {
  const items = wishlist?.items;
  return {
    total: items.reduce((acc, { total }) => acc + total, 0),
    subtotal: items.reduce((acc, { subtotal }) => acc + subtotal, 0)
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getShippingPrice = (wishlist: Wishlist): number => {
  return 0;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getTotalItems = (wishlist: Wishlist): number =>
  wishlist?.items?.length;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getFormattedPrice = (price: number): string => {
  return '';
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemQty = (item: WishlistItem): number => {
  return 1;
};

export const wishlistGetters: WishlistGetters<Wishlist, WishlistItem> = {
  getItems,
  getTotals,
  getItemName,
  getItemImage,
  getItemPrice,
  getItemQty,
  getItemAttributes,
  getShippingPrice,
  getItemSku,
  getTotalItems,
  getFormattedPrice
};
