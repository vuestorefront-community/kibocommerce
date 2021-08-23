import createWishListItem from '../../../src/api/wishList/createWishListItem';
import defaultMutation from '../../../src/api/wishList/createWishListItem/defaultMutation';

describe('[kibo-api-client] createWishListItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('create wishlist', async () => {

    const givenVariables = {
      wishlistId: '1213b4611fca84000185170a0000432a',
      wishlistItemInput: {
        quantity: 1,
        isAssemblyRequired: false,
        product: {
          productCode: 'MS-CAM-002',
          isPackagedStandAlone: true
        }
      }
    };
    const expectedData = {
      createWishlistItem: {
        id: 'a83a238b6172498aaf28ad8100757e91',
        quantity: 1,
        product: {
          productCode: 'MS-CAM-002'
        }
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
              createWishlistItem: {
                id: 'a83a238b6172498aaf28ad8100757e91',
                quantity: 1,
                product: {
                  productCode: 'MS-CAM-002'
                }
              }
            }
          };
        }
      },
      extendQuery: (_, args) => args
    };

    const { data } = await createWishListItem(context, givenVariables);
    expect(data).toStrictEqual(expectedData);
  });
});
