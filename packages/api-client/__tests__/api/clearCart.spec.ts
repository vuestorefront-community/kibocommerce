import clearCart from '../../src/api/cart/clearCart';
import defaultMutation from '../../src/api/cart/clearCart/defaultMutation';

describe('[kibo-api-client] clearCart', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('clears current cart', async () => {
    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        mutate: ({ mutation }) => {
          expect(mutation).toEqual(defaultMutation);
          return { data: 'clear cart response' };
        }
      }
    };

    const { data } = await clearCart(context);

    expect(data).toStrictEqual('clear cart response');
  });

});
