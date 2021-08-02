import useUserOrder from '../../src/useUserOrder';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const searchOrdersResponse = {
  data: {
    orders: {
      startIndex: 1,
      pageSize: 10,
      pageCount: 5,
      totalCount: 50,
      items: [{
        orderNumber: 123,
        locationCode: 'location'
      }]
    }
  }
};

jest.mock('@vue-storefront/core', () => ({
  useUserOrderFactory: (params) => () => params
}));

const context = {
  $kibo: {
    api: {
      searchOrders: jest.fn(() => Promise.resolve(searchOrdersResponse))
    }
  }
};

describe('[commercetools-composables] useUserOrder', () => {
  it('loads user order', async () => {
    const { searchOrders } = useUserOrder() as any;
    const response = await searchOrders(context, { id: 'MS-JKT-001' });

    expect(response).toEqual([{ orderNumber: 123, locationCode: 'location'}]);
    expect(context.$kibo.api.searchOrders).toBeCalledWith({ id: 'MS-JKT-001' }, undefined);
  });
});
