import { Cart } from './../../src/types/index';
import { CrProduct } from './../../../api-client/src/types/GraphQL';
import useCart, { getCart } from './../../src/useCart';

jest.mock('@vue-storefront/core', () => ({
  useCartFactory: (params) => () => params
}));

const context = {
  $kibo: {
    api: {
      getCart: jest.fn(() => {
        return {
          data: {
            currentCart: {} as Cart
          }
        };
      }),
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      updateItemQty: jest.fn(),
      applyCoupon: jest.fn(),
      removeCoupon: jest.fn(),
      clearCart: jest.fn()
    },
    client: {},
    config: {}
  }
} as any;

const customQuery = undefined;

describe('[Kibo-composables] useCart', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('gets the current cart', async () => {
    const response = await getCart(context, { customQuery });
    expect(context.$kibo.api.getCart).toBeCalled();
    expect(response).toStrictEqual({} as Cart);
  });

  it('loads the current cart', async () => {
    const { load } = useCart() as any;
    const response = await load(context, { customQuery });
    expect(context.$kibo.api.getCart).toHaveBeenCalled();
    expect(response).toStrictEqual({} as Cart);
  });

  it('adds to cart', async () => {
    const product = {} as CrProduct;
    const quantity = 100;
    const { addItem } = useCart() as any;
    const response = await addItem(context, {
      currentCart: {} as Cart,
      product,
      quantity: 100,
      customQuery
    });

    expect(response).toStrictEqual({} as Cart);
    expect(context.$kibo.api.addToCart).toBeCalled();
    expect(context.$kibo.api.addToCart).toBeCalledWith(
      {
        product,
        quantity
      },
      customQuery
    );
  });

  it('removes item from cart', async () => {
    const product = {
      isAssemblyRequired: false,
      quantity: 100
    };
    const { removeItem } = useCart() as any;
    const response = await removeItem(context, {
      currentCart: {} as Cart,
      product: product,
      customQuery
    });

    expect(response).toStrictEqual({} as Cart);
    expect(context.$kibo.api.removeFromCart).toBeCalled();
    expect(context.$kibo.api.removeFromCart).toBeCalledWith({
      product
    });
  });

  it('updates Item Qty', async () => {
    const product = {
      isAssemblyRequired: false,
      quantity: 100
    };
    const quantity = 100;
    const { updateItemQty } = useCart() as any;
    const response = await updateItemQty(context, {
      currentCart: {} as Cart,
      product,
      quantity,
      customQuery
    });

    expect(response).toStrictEqual({} as Cart);
    expect(context.$kibo.api.updateItemQty).toBeCalled();
    expect(context.$kibo.api.updateItemQty).toBeCalledWith({
      product,
      quantity
    });
  });

  it('should apply Coupon', async () => {
    const currentCart = {
      id: '1234'
    } as Cart;
    const { applyCoupon } = useCart() as any;
    const response = await applyCoupon(context, {
      currentCart,
      couponCode: 'test-coupon',
      customQuery
    });

    expect(response).toStrictEqual({
      updatedCart: {} as Cart
    });
    expect(context.$kibo.api.applyCoupon).toBeCalled();
    expect(context.$kibo.api.applyCoupon).toBeCalledWith({
      cartId: '1234',
      couponCode: 'test-coupon'
    });
  });

  it('should remove Coupon', async () => {
    const currentCart = {
      id: '1234'
    } as Cart;
    const { removeCoupon } = useCart() as any;
    const response = await removeCoupon(context, {
      currentCart,
      coupon: 'test-coupon',
      customQuery
    });

    expect(response).toStrictEqual({
      updatedCart: {} as Cart
    });
    expect(context.$kibo.api.removeCoupon).toBeCalled();
    expect(context.$kibo.api.removeCoupon).toBeCalledWith({
      cartId: '1234',
      couponCode: 'test-coupon'
    });
  });

  const currentCart = {
    items: [
      {
        product: {
          productCode: 'ABC'
          // isPackagedStandAlone: false,
        }
      },
      {
        product: {
          productCode: 'DEF'
          // isPackagedStandAlone: false,
        }
      },
      {
        product: {
          productCode: 'GHI'
          // isPackagedStandAlone: false,
        }
      }
    ]
  } as Cart;

  it('should find if item is in cart', async () => {
    const mockProduct = {
      productCode: 'ABC',
      isPackagedStandAlone: false
    } as CrProduct;
    const { isInCart } = useCart() as any;
    const response = await isInCart(context, {
      currentCart,
      product: mockProduct
    });

    expect(response).toBe(true);
  });

  it('should return false if item is not in cart', async () => {
    const mockProduct = {
      productCode: 'other-product-code',
      isPackagedStandAlone: false
    } as CrProduct;
    const { isInCart } = useCart() as any;
    const response = await isInCart(context, {
      currentCart,
      product: mockProduct
    });
    expect(response).toBe(false);
  });
});
