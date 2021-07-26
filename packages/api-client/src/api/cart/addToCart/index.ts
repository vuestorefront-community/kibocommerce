import { CustomQuery, Context } from '@vue-storefront/core';
import { Product } from 'packages/api-client/src/types/GraphQL';
import addToCurrentCartQuery from './defaultMutation';
import { addToCartParams, addToCartParamsResponse} from '../../../types/Api';

function buildAddToCartVariables({ product, quantity = 1 }: {
  product: Product,
  quantity: number;
}) {
  return {
    productToAdd: {
      product: {
        isTaxable: true,
        isRecurring: false,
        productCode: product.productCode,
        isPackagedStandAlone: product.isPackagedStandAlone || true,
        variationProductCode: product.variationProductCode,
        options: product.options?.map(po => ({
          attributeFQN: po.attributeFQN,
          name: po.attributeDetail.name,
          value: po.values.find(v => v.isSelected).value
        }))
      },
      quantity,
      fulfillmentMethod: 'Ship',
      isAssemblyRequired: true
    }
  };
}

export default async function addToCart(context: Context, { product, quantity }: addToCartParams, customQuery?: CustomQuery): Promise<addToCartParamsResponse> {
  const variables = buildAddToCartVariables({ product, quantity });

  const { addToCart } = context.extendQuery(customQuery,
    { addToCart: { mutation: addToCurrentCartQuery, variables } }
  );
  return await context.client.mutate({
    mutation: addToCart.mutation,
    variables: addToCart.variables,
    fetchPolicy: 'no-cache'
  });
}
