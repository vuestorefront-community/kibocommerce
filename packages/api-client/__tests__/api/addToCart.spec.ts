import addToCart from '../../src/api/cart/addToCart';
import defaultMutation from '../../src/api/cart/addToCart/defaultMutation';

describe('[kibo-api-client] addToCart', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('adds item to cart', async () => {
    const params = {
      product: { productCode: 'UPC-123'},
      quantity: 1
    };
    const expectedVariables = {
      productToAdd: {
        product: {
          productCode: 'UPC-123',
          isPackagedStandAlone: true,
          variationProductCode: undefined,
          options: undefined
        },
        quantity: 1,
        fulfillmentMethod: 'Ship',
      }
    };
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
          return { data: 'add to cart response' };
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      extendQuery: (customQuery, args) => args
    };

    const { data } = await addToCart(context, params);

    expect(data).toStrictEqual('add to cart response');
  });

});
