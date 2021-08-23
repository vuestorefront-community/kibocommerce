import createWishList from '../../../src/api/wishList/createWishList';
import defaultMutation from '../../../src/api/wishList/createWishList/defaultMutation';

describe('[kibo-api-client] createWishList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('create wishlist', async () => {
    const givenVariables = {
      wishlistInput: {
        customerAccountId: 1061,
        name: 'abcd'
      }
    };

    const expectedData = {
      createWishlist: {
        id: '121273211fca8400018516fc0000432a',
        name: 'abcd'
      }
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
          return {
            data: {
              createWishlist: {
                id: '121273211fca8400018516fc0000432a',
                name: 'abcd'
              }
            }
          };
        }
      },
      extendQuery: (_, args) => args
    };

    const { data } = await createWishList(context, givenVariables);
    expect(data).toStrictEqual(expectedData);
  });
});
