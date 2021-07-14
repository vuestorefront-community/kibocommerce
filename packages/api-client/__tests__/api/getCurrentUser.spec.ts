import getCurrentUser from '../../src/api/getCurrentUser';
import defaultQuery from '../../src/api/getCurrentUser/defaultQuery';

describe('[kibo-api-client] getCurrentUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('gets current user account by session', async () => {
    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        query: ({ query }) => {
          expect(query).toEqual(defaultQuery);
          return { data: 'user response' };
        }
      }
    };

    const { data } = await getCurrentUser(context);

    expect(data).toBe('user response');
  });
});
