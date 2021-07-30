import removeCoupon from '../../src/api/cart/removeCoupon';
import defaultMutation from '../../src/api/cart/removeCoupon/defaultMutation';

describe('[kibo-api-client] removeCoupon', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('removes a coupon from cart', async () => {
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

          return { data: 'remove coupon response' };
        }
      }
    };

    const { data } = await removeCoupon(context, params);

    expect(data).toStrictEqual('remove coupon response');
  });

});
