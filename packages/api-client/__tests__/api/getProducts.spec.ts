import getProduct from '../../src/api/getProduct';
import getProductsQuery from '../../src/api/getProduct/getProductsQuery';
import getProductQuery from '../../src/api/getProduct/getProductQuery';
import configureProductMutation from '../../src/api/getProduct/configureProductMutation';

describe('[kibo-api-client] getProducts', () => {
  it('fetches products with getProductsQuery', async () => {
    const givenVariables = {
      filter: 'categoryId req 2 and productCode ne \'ACC1\'',
      pageSize: 8
    };

    const context = {
      config: {},
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(givenVariables);
          expect(query).toEqual(getProductsQuery);

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

    const products = await getProduct(context, { catId: [2], id: 'ACC1', limit: 8 });

    expect(products[0]).toBe('products response');
  });

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

    const products = await getProduct(context, { id: 'ACC1', attributes: {} });

    expect(products[0]).toBe('product response');
  });

  it('fetches configured product with getProductQuery and configureProductMutation', async () => {
    const queryVariables = {
      productCode: 'ACC1'
    };

    const mutationVariables = {
      productCode: 'ACC1',
      selectedOptions: {
        options: [
          {
            attributeFQN: 'tenant~color',
            value: 'Green'
          }
        ]
      },
      includeOptionDetails: true
    };

    const context = {
      config: {},
      client: {
        query: ({ variables, query }) => {
          expect(variables).toEqual(queryVariables);
          expect(query).toEqual(getProductQuery);

          return {
            data: {
              product: {
                options: [
                  {
                    attributeFQN: 'tenant~color',
                    attributeDetail: {
                      name: 'Color'
                    },
                    values: [
                      {
                        value: 'Green',
                        isSelected: false,
                        isEnabled: true
                      }
                    ]
                  }
                ]
              }
            }
          };
        },
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(mutationVariables);
          expect(mutation).toEqual(configureProductMutation);

          return {
            data: {
              configureProduct: {
                options: [
                  {
                    attributeFQN: 'tenant~color',
                    values: [
                      {
                        value: 'Green',
                        isSelected: true,
                        isEnabled: true
                      }
                    ]
                  }
                ]
              }
            }
          };
        }
      },
      extendQuery: (_, args) => args
    };

    const products = await getProduct(context, { id: 'ACC1', attributes: { color: 'Green' } });

    expect(products[0].options[0]).toStrictEqual({
      attributeFQN: 'tenant~color',
      attributeDetail: {
        name: 'Color'
      },
      values: [
        {
          value: 'Green',
          isSelected: true,
          isEnabled: true
        }
      ]
    });
  });
});
