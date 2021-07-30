import { Cart } from './../../src/types/index';
import { CrProduct } from './../../../api-client/src/types/GraphQL';
import { params, getCart } from './../../src/useCart';
import { context } from '../context';

// const context = {
//   $kibo: {
//     api: {
//       getCart: jest.fn(),
//       addToCart: jest.fn(),
//       removeFromCart: jest.fn(),
//       updateItemQty: jest.fn(),
//       applyCoupon: jest.fn(),
//       removeCoupon: jest.fn(),
//       clearCart: jest.fn(),
//     },
//     client: {},
//     config: {},
//   },
// };

const customQuery = undefined;

describe('[Kibo-composables] useCart', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('gets the current cart', async () => {
    (context.$kibo.api.getCart as jest.Mock).mockReturnValue({
      data: {
        currentCart: {} as Cart
      }
    });
    const response = await getCart(context, { customQuery });
    expect(context.$kibo.api.getCart).toHaveBeenCalled();
    expect(response).toStrictEqual({} as Cart);
  });

  it('loads the current cart', async () => {
    const response = await params.load(context, { customQuery });
    expect(context.$kibo.api.getCart).toHaveBeenCalled();
    expect(response).toStrictEqual({} as Cart);
  });

  it('adds to cart', async () => {
    const product = {} as CrProduct;
    const quantity = 100;
    const response = await params.addItem(context, {
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

    const response = await params.removeItem(context, {
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
    const response = await params.updateItemQty(context, {
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
    const response = await params.applyCoupon(context, {
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
    const response = await params.removeCoupon(context, {
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
          productCode: 'ABC',
          isPackagedStandAlone: false
        }
      },
      {
        product: {
          productCode: 'DEF',
          isPackagedStandAlone: false
        }
      },
      {
        product: {
          productCode: 'GHI',
          isPackagedStandAlone: false
        }
      }
    ]
  } as Cart;
  it('should find if item is in cart', async () => {
    const mockProduct = {
      productCode: 'ABC',
      isPackagedStandAlone: false
    } as CrProduct;

    const response = await params.isInCart(context, {
      currentCart,
      product: mockProduct
    });

    expect(response).toBe(true);
  });

  // it('should return false if item is not in cart', async () => {
  //   const mockProduct = {
  //     productCode: 'XYZ',
  //     isPackagedStandAlone: false,
  //   } as CrProduct;

  //   const response = await params.isInCart(context, {
  //     currentCart,
  //     product: mockProduct,
  //   });

  //   expect(response).toBe(false);
  // });
});
