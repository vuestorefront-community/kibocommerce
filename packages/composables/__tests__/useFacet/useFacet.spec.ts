import useFacet from '../../src/useFacet';
// jest.mock('./../../src/helpers/internals', () => ({
//   enhanceProduct: jest.fn((productResponse) => ({ ...productResponse, _variants: [] })),
//   getFiltersFromProductsAttributes: jest.fn()
// }));

jest.mock('@vue-storefront/kibo-api', () => ({
  AttributeType: {
    STRING: 1
  }
}));

const context = {
  $kibo: {
    api: {
      getProduct: jest.fn(() => ({
        data: {
          products: {
            items: []
          }
        }
      })),
      getCategory: jest.fn(() => ({
        data: {
          categories: {
            results: []
          }
        }
      }))
    }
  }
};

jest.mock('@vue-storefront/core', () => ({
  useFacetFactory: (factoryParams) => () => {

    return {
      search: factoryParams.search
    };
  }
}));

describe('[kibo-composables] useFacet', () => {
  it('triggers faceting search', async () => {
    const { search } = useFacet() as any;

    await search(context, {
      input: {
        itemsPerPage: [10, 20, 50],
        cateogryCode: 'M',
        filters: {
          color: ['blue', 'green']
        }
      }
    } as any);

    expect(context.$kibo.api.getCategory).toBeCalled();
    expect(context.$kibo.api.getProduct).toBeCalled();
  });
});
