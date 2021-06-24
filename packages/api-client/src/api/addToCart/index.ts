import { CustomQuery, Context } from '@vue-storefront/core';
import addToCurrentCartQuery from './defaultMutation';

function buildAddToCartVariables({ product, quantity = 1 }) {
  return {
    productToAdd: {
      product:
        {
          isTaxable: true,
          isRecurring: false,
          productCode: product.variationProductCode || product.productCode,
          createDate: 0,
          updateDate: 0
        },
      quantity,
      fulfillmentMethod: 'Ship'
    }
  };
}

export default async function addToCart(context: Context, { product, quantity }, customQuery?: CustomQuery): Promise<void> {
  const variables = buildAddToCartVariables({ product, quantity });

  const { addToCart } = context.extendQuery(customQuery,
    { addToCart: { mutation: addToCurrentCartQuery, variables } }
  );
  await context.client.mutate({
    mutation: addToCart.mutation,
    variables: addToCart.variables,
    fetchPolicy: 'no-cache'
  });
}
