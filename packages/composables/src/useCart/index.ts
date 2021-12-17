import {
  Context,
  CustomQuery,
  useCartFactory,
  UseCartFactoryParams
} from '@vue-storefront/core';

import { Cart, CartItem, CrProduct } from '@vue-storefront/kibocommerce-api';

export const getCart = async (
  context: Context,
  customQuery: CustomQuery
): Promise<Cart> => {
  const response = await context.$kibo.api.getCart(customQuery);
  return response.data.currentCart;
};

const params: UseCartFactoryParams<Cart, CartItem, CrProduct, any> = {
  load: async (context: Context, { customQuery }) => {
    return await getCart(context, customQuery);
  },

  addItem: async (context: Context, { product, quantity, customQuery }) => {
    await context.$kibo.api.addToCart({ product, quantity }, customQuery);
    return await getCart(context, customQuery);
  },

  removeItem: async (context: Context, { product, customQuery }) => {
    await context.$kibo.api.removeFromCart({ product });
    return await getCart(context, customQuery);
  },

  updateItemQty: async (
    context: Context,
    { product, quantity, customQuery }
  ) => {
    await context.$kibo.api.updateItemQty({ product, quantity });
    return await getCart(context, customQuery);
  },

  clear: async (context: Context) => {
    const clearCartResponse = await context.$kibo.api.clearCart();
    return clearCartResponse.data.deleteCurrentCartItems;
  },

  applyCoupon: async (
    context: Context,
    { currentCart, couponCode, customQuery }
  ) => {
    await context.$kibo.api.applyCoupon({ cartId: currentCart.id, couponCode });
    return { updatedCart: await getCart(context, customQuery) };
  },

  removeCoupon: async (
    context: Context,
    { currentCart, couponCode, customQuery }
  ) => {
    await context.$kibo.api.removeCoupon({
      cartId: currentCart.id,
      couponCode: couponCode
    });
    return { updatedCart: await getCart(context, customQuery) };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInCart: (context: Context, { currentCart, product }) => {
    return (
      currentCart?.items?.find(
        (i) => i.product.productCode === product.productCode
      ) !== undefined
    );
  }
};

export const useCart = useCartFactory<Cart, CartItem, CrProduct, any>(params);
