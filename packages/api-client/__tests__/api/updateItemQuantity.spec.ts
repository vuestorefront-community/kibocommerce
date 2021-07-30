import updateItemQuantity from '../../src/api/cart/updateItemQuantity';
import defaultMutation from '../../src/api/cart/updateItemQuantity/defaultMutation';

describe('[kibo-api-client] updateItemQuantity', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('updates cart item quantity ', async () => {
    const params = {
        product: { id: "123", quantity: 1, isAssemblyRequired: false},
        quantity: 2
    }
    const expectedVariables = {itemId: "123", quantity: 2}
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
            return { data: 'updated cart item' };
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      extendQuery: (customQuery, args) => args
    };

    const { data } = await updateItemQuantity(context, params);

    expect(data).toStrictEqual('updated cart item');
  });

});
