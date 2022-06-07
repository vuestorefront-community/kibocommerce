import configureProduct from '../../src/api/configureProduct';
import configureProductMutation from '../../src/api/configureProduct/defaultMutation';

describe('[kibo-api-client] configureProduct', () => {
  it('fetches configured product with configureProductMutation', async () => {
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
        mutate: ({ variables, mutation }) => {
          expect(variables).toEqual(mutationVariables);
          expect(mutation).toEqual(configureProductMutation);

          return {
            data: 'config response'
          };
        }
      },
      extendQuery: (_, args) => args
    };

    const product = { productCode: 'ACC1' } as any;

    const productResponse = await configureProduct(context, {
      product,
      attributes: { 'tenant~color': 'Green' }
    });

    expect(productResponse.data).toEqual('config response');
  });
});
