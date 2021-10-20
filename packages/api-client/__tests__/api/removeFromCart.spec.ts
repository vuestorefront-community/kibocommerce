import removeFromCart from '../../src/api/cart/removeFromCart';
import defaultMutation from '../../src/api/cart/removeFromCart/defaultMutation';

describe('[kibo-api-client] removeFromCart', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('removes an item from cart', async () => {
    const params = {
      product: {
        id: '1111'
      }
    };
    const expectedVariables = { id: '1111' };
    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        mutate: ({ mutation, variables }) => {
          expect(mutation).toEqual(defaultMutation);
          expect(variables).toEqual(expectedVariables);

          return { data: 'remove cartitem response' };
        }
      }
    };

    const { data } = await removeFromCart(context, params);

    expect(data).toStrictEqual('remove cartitem response');
  });

});
