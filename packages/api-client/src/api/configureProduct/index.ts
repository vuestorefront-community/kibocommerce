import { Context } from '@vue-storefront/core';
import defaultMutation from './defaultMutation';
import { ConfigureProductResponse, InternalConfigureProductParams } from '../../types/Api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function configureProduct(context: Context, params: InternalConfigureProductParams): Promise<ConfigureProductResponse> {
  const attributes = Object.keys(params.attributes).map(a => ({
    attributeFQN: `tenant~${a}`,
    value: params.attributes[a]
  }));
  const product = params.product;
  const gqlMutation = {
    variables: {
      productCode: product.productCode,
      selectedOptions: {
        options: attributes
      },
      includeOptionDetails: true
    },
    mutation: defaultMutation
  };

  return context.client.mutate({
    mutation: gqlMutation.mutation,
    variables: gqlMutation.variables,
    fetchPolicy: 'no-cache'
  });
}
