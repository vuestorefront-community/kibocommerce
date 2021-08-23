import getWishList from '../../../src/api/wishList/getWishList';
import defaultQuery from '../../../src/api/wishList/getWishList/defaultQuery';

describe('[kibo-api-client] getWishList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('getWishlist', async () => {
    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        query: ({ query }) => {
          expect(query).toEqual(defaultQuery);
          return { data: 'getWishList response' };
        }
      }
    };

    const { data } = await getWishList(context);

    expect(data).toBe('getWishList response');
  });
});
