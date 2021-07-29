import { Context } from '@vue-storefront/core';
import { useCheckoutFactory, UseCheckoutFactoryParams } from '../factories/useCheckoutFactory';
import useCart from '../useCart';
import { Checkout } from '@vue-storefront/kibo-api';

const params: UseCheckoutFactoryParams<Checkout> = {
  provide() {
    return {
      cart: useCart()
    };
  },
  load: async (context:Context, params: { cartId?: string }) => {
    let cartId = params?.cartId;
    if (!cartId) {
      cartId = context.cart?.cart?.value?.id;
    }
    const checkoutResponse = await context.$kibo.api.getOrCreateCheckoutFromCart({cartId});
    return checkoutResponse.data?.order;
  }
};

export default useCheckoutFactory<Checkout>(params);
