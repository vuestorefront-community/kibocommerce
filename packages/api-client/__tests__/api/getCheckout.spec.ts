import getCheckout from '../../src/api/getCheckout';
import defaultQuery from '../../src/api/getCheckout/defaultQuery';

describe('[kibo-api-client] getCheckout', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('gets checkout by order id', async () => {
    const givenVariables = {
      orderId: '1234'
    };
    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(defaultQuery);
          return { data: 'checkout response' };
        }
      },
      extendQuery: (_, args) => args
    };
    const { data } = await getCheckout(context, givenVariables);
    expect(data).toBe('checkout response');
  });
});
