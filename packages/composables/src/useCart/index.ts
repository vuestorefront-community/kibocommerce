import {
  Context,
  useCartFactory,
  UseCartFactoryParams
} from '@vue-storefront/core';

import { Cart, CartItem, CrProduct, CrAppliedDiscount } from '../../../api-client/src/types/GraphQL';

const getCart = async (context: Context, customQuery): Promise<Cart> => {
  const response = await context.$kibo.api.getCart(null, customQuery);
  return response.data.currentCart;
};

const params: UseCartFactoryParams<Cart, CartItem, CrProduct, CrAppliedDiscount> = {
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

  updateItemQty: async (context: Context, { product, quantity, customQuery }) => {
    await context.$kibo.api.updateItemQty({ product, quantity });
    return await getCart(context, customQuery);
  },

  clear: async (context: Context) => {
    return await context.$kibo.api.clearCart().data.deleteCurrentCartItems;
  },

  applyCoupon: async (context: Context, { currentCart, couponCode, customQuery }) => {
    await context.$kibo.api.applyCoupon({ cartId: currentCart.id, couponCode });
    return { updatedCart: await getCart(context, customQuery) };
  },

  removeCoupon: async (context: Context, { currentCart, coupon, customQuery }) => {
    await context.$kibo.api.removeCoupon({ cartId: currentCart.id, couponCode: coupon });
    return { updatedCart: await getCart(context, customQuery) };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInCart: (context: Context, { currentCart, product }) => {
    return currentCart?.items?.find(i => i.product.productCode === product.productCode) !== null;
  }
};

export default useCartFactory<Cart, CartItem, CrProduct, CrAppliedDiscount>(params);
