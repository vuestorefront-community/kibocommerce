import {
  WishlistGetters,
  AgnosticAttribute,
  AgnosticPrice,
  AgnosticTotals
} from '@vue-storefront/core';
import type { 
  Wishlist, 
  WishlistItem, 
  WishlistProduct 
} from '@vue-storefront/kibocommerce-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItems = (wishlist: Wishlist): WishlistProduct[] =>
  wishlist?.items.map((item) => item.product);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemName = (product: WishlistProduct): string =>
  product?.name;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemImage = (product: WishlistProduct): string =>
  product?.imageUrl;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemPrice = (
  product: WishlistProduct
): AgnosticPrice => {
  const { price, salePrice } = product.price;
  return {
    regular: price as number,
    special: salePrice as number
  } as AgnosticPrice;
};


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemAttributes = (
  product: WishlistProduct,
  filterByAttributeName?: string[]
) => {
  const attributes = {};
  const options = filterByAttributeName
    ? product?.options?.filter(o => filterByAttributeName.includes(o.name.toLowerCase()))
    : product?.options || [];
  options.forEach(opt => {
    attributes[opt.name] = opt.value;
  });

  return attributes;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemSku = (product: any): string =>
  product?.sku || product?.variationProductCode || product?.productCode;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getTotals = (wishlist: Wishlist): AgnosticTotals => {
  const items = wishlist?.items;
  return {
    total: items.reduce((acc, { total }) => acc + total, 0),
    subtotal: items.reduce((acc, { subtotal }) => acc + subtotal, 0)
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getShippingPrice(wishlist: Wishlist): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getTotalItems = (wishlist: Wishlist): number =>
  wishlist?.items?.length;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemQty(item: WishlistItem): number {
  return 1;
}

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
