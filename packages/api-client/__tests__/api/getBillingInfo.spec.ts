import getBillingInfo from '../../src/api/getBillingInfo';
import defaultQuery from '../../src/api/getBillingInfo/defaultQuery';

describe('[kibo-api-client] getBillingAddressInfo', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('gets billing address by OrderId', async () => {
    const params = {
      orderId: '11f6cca965e3130001da7d6c0000432a'
    };

    const context = {
      client: {
        query: ({ query, variables }) => {
          expect(query).toEqual(defaultQuery);
          expect(variables).toEqual(params);
          return { data: 'billing contact response'};
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      extendQuery: (customQuery, args) => args
    };

    const { data } = await getBillingInfo(context, params);

    expect(data).toBe('billing contact response');
  });
});
