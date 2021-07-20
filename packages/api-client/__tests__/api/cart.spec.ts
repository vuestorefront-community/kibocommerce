import { CreateApolloClient, KiboApolloClient } from '@kibocommerce/graphql-client';
import { UserAuthTicket } from '@kibocommerce/graphql-client/dist/lib/AuthClient';
import getProduct from '../../src/api/getProduct';
import addToCart from '../../src/api/cart/addToCart';
import applyCoupon from '../../src/api/cart/applyCoupon';
import clearCart from '../../src/api/cart/clearCart';
import getCart from '../../src/api/cart/getCart';
import removeCoupon from '../../src/api/cart/removeCoupon';
import removeFromCart from '../../src/api/cart/removeFromCart';
import updateItemQty from '../../src/api/cart/updateItemQuantity';
import cfg from '../../src/mozuConfig';
import { Cart } from '../../src/types/GraphQL';

describe('[kibo-api-client] cart methods', () => {
  const context: {
    config: any;
    client: KiboApolloClient | null;
    extendQuery: (any, args) => any;
  } = {
    config: {},
    client: null,
    extendQuery: (_, args) => args
  };

  const addToCartProxy = async (product) => {
    const params = {
      product,
      quantity: 1
    };
    return (await addToCart(context, params)).data?.addItemToCurrentCart;
  };

  let standardProduct;

  beforeAll(async () => {
    let ticket: UserAuthTicket | null;
    context.client = CreateApolloClient({
      api: cfg.api,
      clientAuthHooks: {
        onTicketChange: (authTicket) => {
          ticket = authTicket;
        },
        onTicketRead: () => {
          return ticket;
        },
        onTicketRemove: () => {
          ticket = null;
        }
      }
    });
    standardProduct = (await getProduct(context, { id: 'MS-BTL-003' }))[0];
  });

  beforeEach(async () => {
    let ticket: UserAuthTicket | null;
    context.client = CreateApolloClient({
      api: cfg.api,
      clientAuthHooks: {
        onTicketChange: (authTicket) => {
          ticket = authTicket;
        },
        onTicketRead: () => {
          return ticket;
        },
        onTicketRemove: () => {
          ticket = null;
        }
      }
    });
  });

  it('should add a standard item to the current user\'s cart', async () => {
    const result = await addToCartProxy(standardProduct);
    expect(result.product?.productCode).toBe('MS-BTL-003');
  });
  it('should add set the quantity to 2 for an item in the current user\'s cart', async () => {
    const addResult = await addToCartProxy(standardProduct);
    const params = {
      product: addResult,
      quantity: 2
    };
    const result = await updateItemQty(context, params);
    expect(result.data?.updateCurrentCartItemQuantity?.quantity).toBe(2);
  });
  it('should apply a coupon to the current user\'s cart', async () => {
    await addToCartProxy(standardProduct);
    let cart: Cart = (await getCart(context, null)).data?.currentCart;
    const params = {
      cartId: cart.id,
      couponCode: 'CTD'
    };
    cart = (await applyCoupon(context, params)).data?.updateCartCoupon;
    expect(cart.orderDiscounts.length).toBe(1);
  });
  it('should remove a coupon from the current user\'s cart', async () => {
    await addToCartProxy(standardProduct);
    let cart: Cart = (await getCart(context, null)).data?.currentCart;
    const params = {
      cartId: cart.id,
      couponCode: 'CTD'
    };
    cart = (await applyCoupon(context, params)).data?.updateCartCoupon;
    expect(cart.orderDiscounts.length).toBe(1);
    await removeCoupon(context, params);
    cart = (await getCart(context, null)).data?.currentCart as Cart;
    expect(cart.orderDiscounts.length).toBe(0);
  });
  it('should remove an item from the current user\'s cart', async () => {
    const addResult = await addToCartProxy(standardProduct);
    const params = {
      product: addResult
    };
    await removeFromCart(context, params);
    expect(null).toBe(null);
  });
  it('should clear the current user\'s cart', async () => {
    const params = {
      product: standardProduct,
      quantity: 1
    };
    await addToCart(context, params);
    let cart = (await getCart(context, null)).data?.currentCart;
    expect(cart?.items?.length).toBe(1);
    await clearCart(context);
    cart = (await getCart(context, null)).data?.currentCart;
    expect(cart?.items?.length).toBe(0);
  });
});
