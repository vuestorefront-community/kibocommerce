import searchOrders from '../../src/api/searchOrders';
import defaultQuery from '../../src/api/searchOrders/defaultQuery';

describe('[kibo-api-client] searchOrders', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('gets order list', async () => {
    const params = {
      page: 1,
      pageSize: 5
    };
    const expectedVariables = {
      filter: 'status ne Abandoned',
      startIndex: 0,
      pageSize: 5
    };

    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        query: ({ query, variables }) => {
          expect(query).toEqual(defaultQuery);
          expect(variables).toEqual(expectedVariables);

          return { data: 'search orders response' };
        }
      },
      extendQuery: (_, args) => args
    };

    const { data } = await searchOrders(context, params);

    expect(data).toStrictEqual('search orders response');
  });

  it('searchs for a single order', async () => {
    const params = {
      page: 1,
      pageSize: 1,
      id: '123'
    };
    const expectedVariables = {
      startIndex: 0,
      pageSize: 1,
      filter: 'orderId eq 123 and status ne Abandoned'
    };

    const context = {
      config: {
        locale: 'en',
        acceptLanguage: ['en', 'de'],
        currency: 'USD'
      },
      client: {
        query: ({ query, variables }) => {
          expect(query).toEqual(defaultQuery);
          expect(variables).toEqual(expectedVariables);

          return { data: 'search order response' };
        }
      },
      extendQuery: (_, args) => args
    };

    const { data } = await searchOrders(context, params);

    expect(data).toStrictEqual('search order response');
  });
});
