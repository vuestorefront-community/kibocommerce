import deleteWishListItem from '../../../src/api/wishList/deleteWishListItem';
import defaultMutation from '../../../src/api/wishList/deleteWishListItem/defaultMutation';

describe('[kibo-api-client] deleteWishListItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('delete item from wishlist', async () => {
    const givenVariables = {
      wishlistId: '121b091e1fca84000185171e0000432a',
      wishlistItemId: 'e843cc5f860c4907ba41ad87008165dc'
    };
    const expectedData = {
      deleteWishlistItem: true
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
              deleteWishlistItem: true
            }
          };
        }
      },
      extendQuery: (_, args) => args
    };

    const { data } = await deleteWishListItem(context, givenVariables);
    expect(data).toStrictEqual(expectedData);
  });
});
