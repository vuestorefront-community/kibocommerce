import getProduct from '../../src/api/getProduct';
import getProductQuery from '../../src/api/getProduct/defaultQuery';

describe('[kibo-api-client] getProduct', () => {
  it('fetches master product with getProductQuery', async () => {
    const givenVariables = {
      productCode: 'ACC1'
    };

    const context = {
      config: {},
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(getProductQuery);

          return {
            data: {
              product: 'product response'
            }
          };
        }
      },
      extendQuery: (_, args) => args
    };

    const getProductResponse = await getProduct(context, { id: 'ACC1' });

    expect(getProductResponse.data.product).toBe('product response');
  });
});
