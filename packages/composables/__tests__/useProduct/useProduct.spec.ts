import { useProduct } from '../../src/useProduct';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const product = (name, slug, productCode) => ({

});

const productResponse = {
  data: {
    products: {
      total: 54,
      results: [
        product('Brynn Insulated Jacket', 'brynn-insulated-jacket', 'MS-JKT-001')
      ]
    }
  }
};

jest.mock('@vue-storefront/core', () => ({
  useProductFactory: (params) => () => params
}));

const context = {
  $kibo: {
    api: {
      getProduct: jest.fn(() => Promise.resolve(productResponse))
    }
  }
};

describe('[commercetools-composables] useProduct', () => {
  it('loads product variants', async () => {
    const { productsSearch } = useProduct('test-product') as any;

    const productResponse = await productsSearch(context, { id: 'MS-JKT-001' });

    expect(productResponse).toEqual(product('Brynn Insulated Jacket', 'brynn-insulated-jacket', 'MS-JKT-001'));
    expect(context.$kibo.api.getProduct).toBeCalledWith({ id: 'MS-JKT-001' }, undefined);
  });
});
