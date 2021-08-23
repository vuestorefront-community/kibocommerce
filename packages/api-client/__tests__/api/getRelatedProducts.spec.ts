import getRelatedProducts from '../../src/api/getRelatedProducts';
import getRelatedProductsQuery from '../../src/api/getRelatedProducts/defaultQuery';

describe('[kibo-api-client] getRelatedProducts', () => {
  it('fetches products with getRelatedProductsQuery', async () => {
    const givenVariables = {
      filter: 'categoryId req 2 and productCode ne \'ACC1\'',
      pageSize: 8
    };

    const context = {
      config: {},
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(getRelatedProductsQuery);

          return {
            data: {
              products: {
                items: [
                  'products response'
                ]
              }
            }
          };
        }
      },
      extendQuery: (_, args) => args
    };

    const getRelatedProductsResponse = await getRelatedProducts(context, { catId: ['2'], id: 'ACC1', limit: 8 });

    expect(getRelatedProductsResponse.data.products.items[0]).toBe('products response');
  });
});
