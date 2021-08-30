import { CustomQuery, Context } from '@vue-storefront/core';
import { Product } from 'packages/api-client/src/types/GraphQL';
import addToCurrentCartQuery from './defaultMutation';
import { AddToCartParams, AddToCartResponse} from '../../../types/Api';

function buildAddToCartVariables({ product, quantity = 1 }: {
  product: Product,
  quantity: number;
}) {
  return {
    productToAdd: {
      product: {
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
      fulfillmentMethod: 'Ship'
    }
  };
}

export default async function addToCart(context: Context, { product, quantity }: AddToCartParams, customQuery?: CustomQuery): Promise<AddToCartResponse> {
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
