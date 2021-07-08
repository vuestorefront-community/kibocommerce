import getOrCreateCheckout from '../../src/api/getOrCreateCheckout';
import defaultMutation from '../../src/api/getOrCreateCheckout/defaultMutation';

describe('[kibo-api-client] getOrCreateCheckout', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('gets or creates checkout from cart id', async () => {
    const givenVariables = {
      cartId: '1234'
    };
    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(givenVariables);
          expect(mutation).toEqual(defaultMutation);
          return { data: 'checkout response' };
        }
      }
    };
    const { data } = await getOrCreateCheckout(context, givenVariables);
    expect(data).toBe('checkout response');
  });
});
