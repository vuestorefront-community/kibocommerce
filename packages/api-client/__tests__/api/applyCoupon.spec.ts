import applyCoupon from '../../src/api/cart/applyCoupon';
import defaultMutation from '../../src/api/cart/applyCoupon/defaultMutation';

describe('[kibo-api-client] applyCoupon', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('apply coupon to cart', async () => {
    const params = {
        cartId: "123",
        couponCode: "FREE"
    }
    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        mutate: ({ mutation, variables }) => {
            expect(mutation).toEqual(defaultMutation);
            expect(variables).toEqual(params);
            return { data: 'apply coupon cart' };
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      extendQuery: (customQuery, args) => args
    };

    const { data } = await applyCoupon(context, params);

    expect(data).toStrictEqual('apply coupon cart');
  });

});
