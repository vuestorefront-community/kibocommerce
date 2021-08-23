import searchProducts from '../../src/api/searchProducts';
import searchProductsQuery from '../../src/api/searchProducts/defaultQuery';

describe('[kibo-api-client] searchProducts', () => {
  it('searches products with searchProductsQuery', async () => {
    const givenVariables = {
      categoryCode: '1',
      pageSize: 20,
      startIndex: 0,
      filters: [],
      sort: 'productCode asc'
    };

    const expectedVariables = {
      facetTemplate: 'categoryCode:1',
      facetValueFilter: 'categoryCode:1,',
      filter: 'categoryCode req 1',
      pageSize: 20,
      query: '',
      sortBy: 'productCode asc',
      startIndex: 0
    };

    const context = {
      config: {},
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(expectedVariables);
          expect(query).toEqual(searchProductsQuery);

          return {
            data: {
              products: 'product response'
            }
          };
        }
      },
      extendQuery: (_, args) => args
    };

    const searchProductsResponse = await searchProducts(context, givenVariables);

    expect(searchProductsResponse.data.products).toBe('product response');
  });
});
