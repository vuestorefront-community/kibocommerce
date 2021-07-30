import getCart from '../../src/api/cart/getCart';
import defaultQuery from '../../src/api/cart/getCart/defaultQuery';

describe('[kibo-api-client] getCart', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('gets current cart', async () => {
    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        query: ({ query }) => {
          expect(query).toEqual(defaultQuery);
          return { data: 'cart' };
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      extendQuery: (customQuery, args) => args
    };

    const { data } = await getCart(context);

    expect(data).toStrictEqual('cart');
  });

});
