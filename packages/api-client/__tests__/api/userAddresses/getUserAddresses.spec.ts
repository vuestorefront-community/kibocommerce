import getUserAddresses from '../../../src/api/getUserAddresses';
import defaultQuery from '../../../src/api/getUserAddresses/defaultQuery';

describe('[kibo-api-client] getUserAddresses', () => {
  it('fetches user addresses', async () => {
    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        query: ({ variables, query }) => {
          expect(query).toEqual(defaultQuery);

          return { data: 'user addresses response' };
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      extendQuery: (customQuery, args) => args
    };

    const { data } = await getUserAddresses(context, null);

    expect(data).toBe('user addresses response');
  });
});
